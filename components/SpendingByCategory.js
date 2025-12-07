
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const COLORS = [
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  '#4BC0C0',
  '#9966FF',
  '#FF9F40',
];

const SpendingByCategoryChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Spending by Category</Text>
        <Text style={styles.emptyText}>No data to display yet.</Text>
      </View>
    );
  }

  const chartData = data.map((item, index) => ({
    name: item.category,
    population: item.total,
    color: COLORS[index % COLORS.length],
    legendFontColor: '#333',
    legendFontSize: 12,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spending by Category</Text>

      <PieChart
        data={chartData}
        width={screenWidth - 32} // little padding on the sides
        height={220}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="16"
        absolute // shows numbers instead of percentages
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 24,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 8,
  },
});

export default SpendingByCategoryChart;