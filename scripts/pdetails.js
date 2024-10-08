const pdetails = [
  {
    id: 1,
    title: "Demand Forecasting and Inventory Optimization at Toyota",
    role: "Senior Data Scientist",
    Description:[
      "Led the development and optimization of vehicle dispatch prediction models, achieving a 10% performance increase using Gurobi, with full MLOps integration to ensure seamless deployment and monitoring.",
      "Reduced MAPE from 65% to 3.6% for a 12-month car series forecasting model, utilizing AWS SageMaker and Databricks. Established robust CI/CD pipelines to automate model training, validation, and deployment, significantly reducing manual intervention.",
      "Automated the model optimization pipeline, improving performance by 60%. Leveraged MLOps best practices to set up automated monitoring, logging, and alerting systems, ensuring long-term model stability and scalability in production.",
      "Collaborated with McKinsey on operational forecasting, resolving critical bugs and implementing comprehensive testing practices with automated validation workflows, improving the reliability and maintainability of forecasting models.",
      "Worked with Deloitte to streamline and automate a monthly workflow, integrating MLOps tools to cut processing time by 40%, while saving $200K per month. Automated version control for datasets and models, allowing for efficient tracking and rollback if needed."
    ]
    },
  {
    id: 2,
    title: "Fraudulent Automobile Claims Detection",
    role: "Machine Learning Engineer",
    Description:[
      "Led a team in developing an Insurance Fraud Detection model, saving 30% of the fraud-related cost.",
      "As the project lead, I developed a robust fraud detection system for Atlanta Insurance's auto claims, overseeing a team of two Data Scientists. My individual contributions included meticulous data preparation, feature engineering, and strategic model implementation to effectively identify fraudulent claims.",
      "Leveraging Python, scikit-learn, CUDA, PySpark, Power BI, and XGBoost, I crafted a comprehensive solution. The system incorporated supervised machine learning models (AdaBoost, XGBoost, SVM) and unsupervised techniques (Isolation Forest, DBSCAN), which exceeded expectations.",
      "I deployed the model using Azure Web Service, achieving a 30% reduction in fraud-related costs, significantly enhancing Atlanta Insurance's fraud detection capabilities and claims processing efficiency."      
    ]
  },
  {
    id: 3,
    title: "ML-driven Bank's Customer Segmentation",
    role: "Machine Learning Engineer",
    Description:[
      "Enhanced customer segmentation at a bank, boosting customer retention by 20% and cross-selling by 30%.",
      "As a Data Scientist, I worked on an AI-driven customer segmentation project to enhance the bank's customer segmentation strategy and drive business growth. I started with data quality reporting, preparing a data dictionary and analyzing the bank's customer data to identify and report null values, incoherent values, outliers, invalid data, and duplicates.",
      "Next, I created scoring variables to assess the quality of customer segmentation based on the bank's objectives and goals. I developed over 100 Key Performance Indicators (KPIs) for use in machine learning models, cleaned and structured the data, and employed machine learning algorithms such as hierarchical clustering and K-means for customer segmentation.",
      "By iteratively refining the models and selecting the best-performing model based on scoring variables, I achieved over 96% accuracy in segment assignment. I also shared insights on the characteristics of each customer segment and provided detailed customer profiling to inform the bank's marketing and sales strategies.",
      "Ultimately, my approach significantly improved the bank's customer segmentation strategy, empowering the bank to make more informed decisions and tailor its marketing and sales strategies to each segment, resulting in business growth. The successful development of a highly accurate assignment engine enabled the bank to accurately determine the segment to which a client belongs, further improving the overall customer experience."          
    ]
  },
  {
    id: 4,
    title: "Energy Production, Consumption and Demand Forecasting",
    role: "Machine Learning Engineer",
    Description:[
      "Built energy demand and production forecasting models for an energy company, increasing monthly benefits by $200K.",
      "As a Data Scientist, I worked on a project to create highly accurate forecasting models for energy production, consumption, and demand. I began with data quality reporting, analyzing the dataset to identify missing data, duplicates, incoherent data, and outliers. I prepared a report on the analysis for the client, which helped them better understand the quality of their data.",
      "I then cleaned and structured the dataset to be suitable for machine learning models. In the first iteration of building machine learning models, I utilized the client's data to create forecasting models for energy production, demand, and consumption. I achieved Mean Absolute Percentage Errors (MAPE) of 0.015%, 0.03%, and 0.035% for energy production, demand, and consumption models, respectively, using models like Long Short-Term Memory (LSTM), Temporal Fusion Transformer (TFT), and Facebook's Prophet.",
      "The client desired to further improve model accuracy, so I scraped additional data that might have correlations with target variables, such as Google Trends, Human Capital Project (HCP) indices, Bank Al-Maghrib (BKAM) data, press releases, and weather data. In the second iteration, I improved the forecasting models using external data, achieving MAPE values of 0.009%, 0.023%, and 0.028% for energy production, demand, and consumption models, respectively.",
      "Ultimately, I successfully created highly accurate forecasting models for energy production, consumption, and demand, meeting the client's goal and increasing their monthly benefits by $200K."
    ]
  },
  {
    id: 5,
    title: "Urban Mobility Analysis",
    role: "Machine Learning Engineer",
    Description:[
      "Analyzed urban mobility data, providing dashboards and critical insights for a $300,000 investment.",
      "I worked on a challenging project involving the analysis of urban mobility using GPS data. The objective of the project was to identify bottlenecks, create mobility flow datasets, and visualize the results using various tools. I faced several challenges in this project, including working with GPS data from multiple sources and formats, and the need to use advanced clustering algorithms to identify urban bottlenecks.",
      "I began by collecting and exploring GPS data from sources such as smartphones, IoT devices, and transportation systems. The data preprocessing step was crucial, as I needed to eliminate noise, inaccuracies, and missing values to ensure that the data was suitable for further analysis. I utilized DBSCAN, a powerful clustering algorithm, to identify urban bottlenecks and high-density areas with traffic congestion or limited mobility.",
      "Once I had created a mobility flow dataset using the processed GPS data and DBSCAN results, I analyzed the dataset to identify patterns, trends, and correlations that could impact urban mobility and traffic management. I used various tools, such as Power BI, Folium, and Plotly, to visualize the results of the urban mobility analysis.",
      "By plotting graphs and heatmaps, I was able to display traffic congestion, bottlenecks, mobility patterns, and other relevant insights. The visualizations and statistics provided valuable insights for stakeholders and decision-makers, empowering them to make data-driven urban planning and traffic management decisions."
    ]
  },
  {
    id: 6,
    title: "Cashflow Forecasting",
    role: "Machine Learning Engineer",
    Description:[
      "Developed a Cashflow forecasting model for a utility company with a 0.1% MAPE.",
      "As a Data Scientist, I contributed significantly to accurately predicting cash flows for an electricity and water utility company. This project involved analyzing specific types of data relevant to the utility industry, such as electricity and water consumption meters, customer billing records, tariff structures, operational costs, and maintenance expenses.",
      "Handling the high volumes of time-series data, including hourly or daily consumption data, billing records, and external factors like weather patterns and market dynamics, presented unique challenges. I utilized time series analysis, regression models, and forecasting algorithms to capture relationships and patterns within the data.",
      "Collaboration with the utility company was crucial throughout the project. Regular communication and close collaboration with their domain experts ensured that the cash flow predictions aligned with their specific business needs.",
      "By proactively addressing data challenges, employing preprocessing techniques, and leveraging advanced machine learning algorithms, I achieved highly accurate cash flow predictions. These forecasts empowered the utility company to make informed decisions regarding financial planning, investment strategies, and operational management.",
      "As the project concluded, I successfully transitioned to the operations phase, deploying the cash flow prediction models into the company's existing systems. This enabled real-time utilization of accurate forecasts, supporting cash flow management, budgeting, and overall financial decision-making."
      ]
  },
  {
    id: 7,
    title: "Energy Production Forecasting",
    role: "Machine Learning Engineer",
    Description:[
      "Created a highly accurate forecasting model for energy production for a large electric utility, handling gigabytes of hourly data from wind turbines.",
      "As a Data Scientist, I contributed to a project to create a highly accurate forecasting model for energy production for a large electric utility. We had hourly data of electricity production for each wind turbine at various sites and were dealing with many gigabytes of data.",
      "I tackled missing data by implementing robust data preprocessing techniques to handle these issues effectively. I automated an ETL pipeline to clean data from the source and store it in a data lake using Azure Data Factory. I built deep learning models such as Long Short-Term Memory (LSTM), Temporal Fusion Transformer (TFT), and Gated Recurrent Unit (GRU) using TensorFlow and PyTorch. I checked the values that didn't make sense and which the models couldn't predict. Collaboration with the client during each sprint helped identify potential features to enhance the models.",
      "By proactively addressing these challenges and leveraging data preprocessing techniques, outlier detection methods, and model optimization strategies, I ensured that we achieved the best possible results for our client. At the end of the project, we successfully met the client's expectations and transitioned to the operations phase."
       ]
  },
  {
    id: 8,
    title: "Investment Intentions Forecasting",
    role: "Machine Learning Engineer",
    Description:[
      "Developed an investment intentions forecasting model for a tourism company, achieving 70% performance improvement.",
      "As a Data Scientist, I played a crucial role in a project focused on accurately forecasting investment intentions, predicting the likelihood of individuals or organizations investing in various financial instruments.",
      "To gather the necessary data, I utilized web scraping techniques with Selenium, extracting information from different sources such as financial websites, social media platforms, and market news. Handling vast amounts of data, often spanning gigabytes, required robust data handling techniques to ensure accuracy.",
      "I automated the data cleaning and transformation process using Azure Data Factory, ensuring the data was preprocessed effectively. Advanced deep learning techniques, including LSTM, TFT, and GRU models implemented with TensorFlow and PyTorch, were utilized to capture temporal patterns and dependencies within the investment data.",
      "Collaboration with the client was crucial throughout the project. I engaged in regular communication and collaboration sessions to incorporate their domain expertise and identify additional features to enhance the models.",
      "By proactively addressing challenges and leveraging data preprocessing techniques, outlier detection methods, and model optimization strategies, I achieved accurate investment intention forecasts. I successfully met the client's expectations, enabling them to make informed decisions based on our reliable predictions.",
      "As the project concluded, I transitioned to the operations phase, deploying the forecasting models into a production environment. This empowered the client to utilize the accurate predictions for effective investment decision-making.",
      "In summary, my role as a Data Scientist involved web scraping using Selenium, handling diverse data sources, and applying advanced deep learning techniques for forecasting investment intentions. Through collaboration, innovation, and robust data handling, I delivered a reliable forecasting solution that met the client's needs."
    ]
  },
  {
    id: 9,
    title: "Student Academic Success Forecasting",
    role: "Machine Learning Researcher",
    Description:[
      "Developed a machine learning system with 80% accuracy that helps professors identify students at risk of academic challenges.",
      "I took on the challenging project of predicting which students were likely to face learning difficulties and developing a targeted support system to help them succeed academically. The project involved several complex steps, starting with data cleaning, analysis, and visualization. I ensured the quality and integrity of the educational dataset, conducted a comprehensive analysis of the data, and visualized the data using tools such as Seaborn and Pandas to generate insights to inform the development of the predictive model.",
      "I proceeded with feature engineering and selection, creating and selecting relevant features from the dataset such as demographic information, academic history, and social factors to be used as input for the machine learning model. Using scikit-learn, I developed a supervised machine learning model to predict students who may face learning difficulties and conducted model evaluation using cross-validation, performance metrics, and comparison to alternative models to ensure the chosen model achieved the highest accuracy and generalizability.",
      "The project was implemented using Python, scikit-learn, Pandas, and Seaborn. The successful development and deployment of the predictive model allowed educational institutions to proactively identify students who may face learning difficulties. By providing targeted support and interventions, educators could help these students overcome challenges and achieve their full academic potential." 
    ]
  }
]