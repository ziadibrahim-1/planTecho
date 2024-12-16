import { Component, ViewChild } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { PlantData } from '../../../shared/interfaces/auth';
import { NgFor, NgIf } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-plant-charts',
  standalone: true,
  imports: [NgFor, BaseChartDirective, NgIf],
  templateUrl: './plant-charts.component.html',
  styleUrls: ['./plant-charts.component.scss'],
})
export class PlantChartsComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public plants: PlantData[] = [
    { name: 'Rose', temperature: 22, humidity: 60, water: 30 },
    { name: 'Cactus', temperature: 35, humidity: 20, water: 10 },
    { name: 'Tulip', temperature: 18, humidity: 70, water: 40 },
  ];

  public selectedPlant: PlantData | null = null;

  public pieChartData: ChartData<'pie'> = {
    labels: ['Temperature', 'Humidity', 'Water'],
    datasets: [
      {
        data: [],
        backgroundColor: ['#4caf50', '#8bc34a', '#c8e6c9'], // Green shades
      },
    ],
  };

  public barChartData: ChartData<'bar'> = {
    labels: ['Temperature', 'Humidity', 'Water'],
    datasets: [
      {
        label: 'Plant Data',
        data: [],
        backgroundColor: ['#4caf50', '#8bc34a', '#c8e6c9'],
      },
    ],
  };

  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#4caf50',
        },
      },
    },
  };

  onPlantChange(event: Event) {
    const plantName = (event.target as HTMLSelectElement).value;
    this.selectedPlant = this.plants.find((plant) => plant.name === plantName) || null;

    if (this.selectedPlant) {
      const { temperature, humidity, water } = this.selectedPlant;

      // Update both pie and bar chart data
      this.pieChartData.datasets[0].data = [temperature, humidity, water];
      this.barChartData.datasets[0].data = [temperature, humidity, water];

      // Trigger chart updates
      this.chart?.update(); // Assuming 'chart' is a reference to both pie and bar charts
    }
  }}
