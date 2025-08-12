# Azure Realtime Weather Tracker

A cloud-powered web application that provides real-time weather updates using Azure services. Built for scalability, efficiency, and seamless data access.

## 🌐 Project Overview

Azure Realtime Weather Tracker collects live weather data from public APIs, processes it in real time using Azure Functions, and displays it via a modern web interface. It's designed as a serverless, event-driven architecture leveraging Azure's powerful cloud platform.

## 🚀 Features

* Real-time weather tracking for global cities
* Azure Functions for serverless backend processing
* Blob Storage or Cosmos DB for weather data storage
* Live UI dashboard for data visualization
* Trigger-based data updates using Azure Event Grid or Timer
* Clean and responsive front-end design

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript / React (optional)
* **Backend:** Azure Functions (JavaScript / Python / C#)
* **Data Source:** OpenWeatherMap API / WeatherStack API
* **Storage:** Azure Cosmos DB / Azure Table Storage / Blob Storage
* **Hosting:** Azure Static Web Apps or Azure App Service
* **Monitoring:** Azure Application Insights

## 🧱 Architecture

```
[User]
   |
   V
[Frontend UI] <---> [Azure Function App]
                           |
                           V
                [Weather API Integration]
                           |
                           V
           [Azure Storage or Cosmos DB]
```

## ⚙️ Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/Azure-Realtime-Weather-Tracker.git
   cd Azure-Realtime-Weather-Tracker
   ```

2. **Create Required Azure Resources**

   * Function App
   * Cosmos DB or Blob Storage
   * Application Insights
   * Static Web App (optional)

3. **Configure Environment Variables**

   * Weather API Key
   * Storage Connection String
   * Timer or Event Trigger settings

4. **Deploy Function App**

   ```bash
   func azure functionapp publish <YourFunctionAppName>
   ```

5. **Deploy Frontend (if any)**

   ```bash
   npm run build
   ```d

## 📦 Example Response

```json
{
  "location": "Chennai",
  "temperature": "33°C",
  "humidity": "70%",
  "condition": "Partly Cloudy",
  "lastUpdated": "2025-06-14T15:30:00Z"
}
```

## 📸 Screenshots

<img width="667" height="431" alt="image" src="https://github.com/user-attachments/assets/db6b7b4f-2818-4d1b-bd3e-efc65cce7f98" />


## 🧑‍💻 Author

* **Mohan Balaji** – [@TechWithMohan](https://github.com/Mohan-Balaji)
