const pdetails = [
  {
    id: 1,
    title: "Fraudulent Automobile Claims Detection",
    role: "Data Scientist at Atlanta Insurance",
    Description:[
      "As the project lead for a team of two Data Scientists, I worked on a comprehensive fraud detection system for Atlanta Insurance's automobile claims. The objective was to develop a robust system that could effectively detect fraudulent claims using machine learning techniques.",
      "Our team utilized a meticulous methodology that began with data preparation and feature engineering, which involved data cleaning, duplicate detection, correction of incoherent values, and feature engineering in the insurance claims dataset.",
      "We also addressed the issue of unbalanced data by using a semi-supervised methodology to ensure the models were trained effectively on both fraudulent and non-fraudulent cases. Our team created supervised machine learning models, including AdaBoost, XGBoost, and Support Vector Machine (SVM), to detect fraudulent claims while minimizing false positive cases. Additionally, we utilized unsupervised learning techniques such as Isolation Forest and Density-Based Spatial Clustering of Applications with Noise (DBSCAN) to detect potential fraud as outliers in the dataset.",
      "To implement the project, we used Python, scikit-learn, CUDA, PySpark, Power BI, and XGBoost technologies. Our team's approach successfully developed a comprehensive fraud detection system that effectively identified fraudulent cases while minimizing false positives. This allowed Atlanta Insurance to streamline its claims processing and mitigate the financial impact of fraudulent claims.",
      "As the project lead, I was responsible for ensuring that the project adhered to best practices, timelines, and quality standards. My contribution to the project included driving the team's methodology, supervising feature engineering and model development, as well as ensuring that the project was completed within schedule and budget. Working as a team of two data scientists, we were able to deliver a project that met the company’s needs and exceeded its expectations."
    ]
  },
  {
    id: 2,
    title: "ML-driven Bank's Customer Segmentation",
    role: "Data Scientist Associate at AkumenIA",
    Description:[
      "As a Data Scientist Associate at AkumenIA, I worked on an AI-driven customer segmentation project to enhance the bank's customer segmentation strategy and drive business growth. The project involved several steps, starting with data quality reporting, where we prepared a data dictionary and analyzed the bank's customer data to identify and report null values, incoherent values, outliers, invalid data, and duplicates.",
      "Next, we created scoring variables to assess the quality of customer segmentation based on the bank's objectives and goals. We then developed over 100 Key Performance Indicators (KPIs) for use in machine learning models, cleaned and structured the data, and employed machine learning algorithms such as hierarchical clustering and K-means for customer segmentation.",
      "By iteratively refining the models and selecting the best-performing model based on scoring variables, we were able to achieve over 96% accuracy in segment assignment without using the most important KPI, and 99.99% accuracy when including the key KPI. The project also involved sharing insights on the characteristics of each customer segment and providing detailed customer profiling to inform the bank's marketing and sales strategies.",
      "Ultimately, our team's approach significantly improved the bank's customer segmentation strategy, empowering the bank to make more informed decisions and tailor its marketing and sales strategies to each segment, resulting in business growth. The successful development of a highly accurate assignment engine also enabled the bank to accurately determine the segment to which a client belongs, further improving the overall customer experience"
    ]
  },
  {
    id: 3,
    title: "Energy Production, Consumption and Demand Forecasting",
    role: "Data Scientist Associate at AkumenIA",
    Description:[
      "As a Data Scientist Associate at AkumenIA, I worked on a project to create highly accurate forecasting models for energy production, consumption, and demand. The project involved a meticulous methodology that began with data quality reporting, where we analyzed the dataset to identify missing data, duplicates, incoherent data, and outliers. We prepared a report on the analysis for the client, which helped them to better understand the quality of their data.",
      "We then cleaned and structured the dataset to be suitable for machine learning models. In the first iteration of building machine learning models, we utilized the client's data to create forecasting models for energy production, demand, and consumption. We achieved Mean Absolute Percentage Errors (MAPE) of 0.015%, 0.03%, and 0.035% for energy production, demand, and consumption models, respectively, using models like Long Short-Term Memory (LSTM), Temporal Fusion Transformer (TFT), and Facebook's Prophet.",
      "The client desired to further improve model accuracy, so we scraped additional data that might have correlations with target variables, such as Google Trends, Human Capital Project (HCP) indices, Bank Al-Maghrib (BKAM) data, press releases, and weather data. In the second iteration of building machine learning models, we reiterated the forecasting models using external data to improve accuracy. We achieved MAPE values of 0.009%, 0.023%, and 0.028% for energy production, demand, and consumption models, respectively.",
      "As a team of Data Scientist Associates at AkumenIA, we successfully created highly accurate forecasting models for energy production, consumption, and demand, meeting the client's goal."
    ]
  },
  {
    id: 4,
    title: "Urban Mobility Analysis",
    role: "Data Scientist Associate at Atlanta Insurance",
    Description:[
      "I worked on a challenging project involving the analysis of urban mobility using GPS data. The objective of the project was to identify bottlenecks, create mobility flow datasets, and visualize the results using various tools. Our team faced several challenges in this project, including working with GPS data from multiple sources and formats, and the need to use advanced clustering algorithms to identify urban bottlenecks.",
      'We began the project by collecting and exploring GPS data from various sources such as smartphones, IoT devices, and transportation systems. The data preprocessing step was particularly important, as we needed to eliminate noise, inaccuracies, and missing values to ensure that the data was suitable for further analysis. We also used DBSCAN, a powerful clustering algorithm, to identify urban bottlenecks and high-density areas with traffic congestion or limited mobility.',
      "Once we had created a mobility flow dataset using the processed GPS data and DBSCAN results, we analyzed the dataset to identify patterns, trends, and correlations that could impact urban mobility and traffic management. Our team utilized a variety of tools, such as Power BI, Folium, and Plotly, to visualize the results of the urban mobility analysis. By plotting graphs and heatmaps, we were able to display traffic congestion, bottlenecks, mobility patterns, and other relevant insights.",
      "The visualizations and statistics we produced provided valuable insights for stakeholders and decision-makers, empowering them to make data-driven urban planning and traffic management decisions."
    ]
  },
  {
    id: 5,
    title: "Cashflow Forecasting",
    role: "Data Scientist Associate at AkumenIA",
    Description:[
      "As a Data Scientist Associate at AkumenIA, I contributed significantly to accurately predicting cash flows for an electricity and water utility company. This project involved analyzing specific types of data relevant to the utility industry, such as electricity and water consumption meters, customer billing records, tariff structures, operational costs, and maintenance expenses.",
"Handling the high volumes of time-series data, including hourly or daily consumption data, billing records, and external factors like weather patterns and market dynamics, presented unique challenges. Leveraging advanced analytics techniques, we utilized time series analysis, regression models, and forecasting algorithms to capture relationships and patterns within the data.",
"Collaboration with the utility company was crucial throughout the project. Regular communication and close collaboration with their domain experts ensured that the cash flow predictions aligned with their specific business needs.",
"By proactively addressing data challenges, employing preprocessing techniques, and leveraging advanced machine learning algorithms, we achieved highly accurate cash flow predictions. These forecasts empowered the utility company to make informed decisions regarding financial planning, investment strategies, and operational management.",
"As the project concluded, we successfully transitioned to the operations phase, deploying the cash flow prediction models into the company's existing systems. This enabled real-time utilization of accurate forecasts, supporting cash flow management, budgeting, and overall financial decision-making."
    ]
  },
  {
    id: 6,
    title: "Energy Production Forecasting",
    role: "Data Scientist Associate at AkumenIA",
    Description:[
      "As a Data Scientist Associate at AkumenIA, I contributed to a project to create a highly accurate forecasting model for energy production for a large electric utility.  We had hourly data of the electricity production for each wind turbine for each site and we were dealing with many gigabytes of data",
      " We dealied with missing data, by implementing robust data preprocessing techniques to handle these issues effectively. We automated an ETL pipeline to clean data from the source and store them in a data lake using Azure DataFactory. We built Deep learning models such as Long Short-Term Memory (LSTM), Temporal Fusion Transformer (TFT), and Gated Recurrent Unit (GRU) using Tensorflow and PyTorch. We checked the values that didn't make sense and which the models couldn't predict the result. We collaborated with the client during each sprint to find what features could be added and how we can further improve the models.",
      "By proactively addressing these challenges and leveraging data preprocessing techniques, outlier detection methods, and model optimization strategies, we ensured that we achieved the best possible results for our client. At the end of the project, we were able to meet the client's expectations. And we started the operations part."
    ]
  },
  {
    id: 7,
    title: "Investment Intentions Forecasting",
    role: "Data Scientist Associate at AkumenIA",
    Description:[
      "As a Data Scientist Associate at AkumenIA, I played a crucial role in a project focused on accurately forecasting investment intentions. This involved predicting the likelihood of individuals or organizations investing in various financial instruments.",
"To gather the necessary data, I utilized web scraping techniques with Selenium, extracting information from different sources such as financial websites, social media platforms, and market news. Handling vast amounts of data, often spanning gigabytes, required robust data handling techniques to ensure accuracy.",
"We automated the data cleaning and transformation process using Azure DataFactory, ensuring the data was preprocessed effectively. Advanced deep learning techniques, including LSTM, TFT, and GRU models implemented with TensorFlow and PyTorch, were utilized to capture temporal patterns and dependencies within the investment data.",
"Collaboration with the client was crucial throughout the project. We engaged in regular communication and collaboration sessions to incorporate their domain expertise and identify additional features to enhance the models.",
"By proactively addressing challenges and leveraging data preprocessing techniques, outlier detection methods, and model optimization strategies, we achieved accurate investment intention forecasts. We successfully met the client's expectations, enabling them to make informed decisions based on our reliable predictions.",
"As the project concluded, we transitioned to the operations phase, deploying the forecasting models into a production environment. This empowered the client to utilize the accurate predictions for effective investment decision-making.",
"In summary, my role as a Data Scientist Associate at AkumenIA involved web scraping using Selenium, handling diverse data sources, and applying advanced deep learning techniques for forecasting investment intentions. Through collaboration, innovation, and robust data handling, we delivered a reliable forecasting solution that met the client's needs."    ]
  },
  {
    id: 8,
    title: "Student Academic Success Forecasting",
    role: "Data Scientist Intern at National School of Applied Sciences of Khouribga, Morocco",
    Description:[
      "I took on the challenging project of predicting which students were likely to face learning difficulties and developing a targeted support system to help them succeed academically. The project involved several complex steps, starting with data cleaning, analysis, and visualization. I ensured the quality and integrity of the educational dataset, conducted a comprehensive analysis of the data, and visualized the data using tools such as Seaborn and Pandas to generate insights to inform the development of the predictive model.",
      "I proceeded with feature engineering and selection, creating and selecting relevant features from the dataset such as demographic information, academic history, and social factors to be used as input for the machine learning model. Using scikit-learn, I developed a supervised machine learning model to predict students who may face learning difficulties and conducted model evaluation using cross-validation, performance metrics, and comparison to alternative models to ensure the chosen model achieved the highest accuracy and generalizability.",
      "The project was implemented using Python, scikit-learn, Pandas, and Seaborn. The successful development and deployment of the predictive model allowed educational institutions to proactively identify students who may face learning difficulties. By providing targeted support and interventions, educators could help these students overcome challenges and achieve their full academic potential."
      
    ]
  },
  {
    id: 9,
    title: "Drowsiness Detection",
    role: "Freelance project",
    Description:[
      "During my freelancing experience, I undertook an exciting project focused on drowsiness detection. The objective was to develop a system that could detect signs of drowsiness in individuals, particularly drivers, to prevent accidents and ensure road safety.",
      "To accomplish this, I gathered a diverse dataset consisting of video recordings captured from in-car cameras and various physiological signals such as eye movement, head pose, and blink frequency. These signals were crucial in identifying patterns associated with drowsiness.",
      "In the project, I employed a combination of computer vision and machine learning techniques. Initially, I used OpenCV to extract facial landmarks and track facial features in real-time from the video data. This allowed me to monitor eye closure, yawning, and other indicators of drowsiness.",
      "Next, I leveraged machine learning algorithms to classify the extracted features and determine the likelihood of drowsiness. Specifically, I experimented with various models such as Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs) to capture both spatial and temporal information from the data.",
      "The methodology involved a two-step process: feature extraction and classification. In the feature extraction step, I used pre-trained models such as VGGNet or ResNet to extract high-level features from the facial images. These features were then fed into the classification models, which were trained on labeled data to differentiate between alert and drowsy states.",
      "To evaluate the system's performance, I employed techniques such as k-fold cross-validation and calculated metrics like accuracy, precision, recall, and F1 score. For instance, the accuracy of the drowsiness detection system reached an impressive 92%, indicating its ability to correctly identify drowsy states with a high degree of accuracy.",
      "Throughout the project, I followed an iterative approach, constantly refining the models and incorporating feedback from clients or domain experts. This ensured that the system could generalize well to different individuals and lighting conditions, enhancing its real-world applicability.",
      "In summary, my freelancing project on drowsiness detection involved working with a diverse dataset comprising video recordings and physiological signals. By combining computer vision techniques with machine learning models, I developed a system capable of detecting signs of drowsiness. The methodology included feature extraction and classification using models like CNNs and RNNs. With an accuracy of 92%, the system demonstrated its high level of accuracy in identifying drowsy states. Through an iterative process, I refined the models to achieve accurate and practical drowsiness detection."
    ]
  }
]

// const pdetails = [
//   {
//     id: 1,
//     title: "AI-driven Customer Segmentation for a Bank",
//     role: "Data Scientist Associate at AkumenIA",
//     objective: "To enhance the bank's customer segmentation strategy using AI and machine learning techniques to drive business growth.",
//     methodologies: [
//       {
//         title: "Data Quality Reporting:",
//         details: [
//           "Prepared a data dictionary and analyzed the bank's customer data.",
//           "Identified and reported null values, incoherent values, outliers, invalid data, and duplicates."
//         ]
//       },
//       {
//         title: "Scoring Variables Creation:",
//         details: [
//           "Developed scoring variables to assess the quality of customer segmentation based on the bank's objectives and goals."
//         ]
//       },
//     ],
//     result: "By leveraging AI and machine learning techniques, we significantly improved the bank's customer segmentation strategy. Our approach not only provided insights into the characteristics and profiles of each customer segment but also led to the development of a highly accurate assignment engine. This project's success empowered the bank to make more informed decisions, tailor its marketing and sales strategies to each segment, and ultimately drive business growth."
//   },
//   {
//     id: 2,
//     title: "Title of Popup 2",
//     overview: "",
//     methodology: "",
//     result: ""
//   },
//   {
//     id: 3,
//     title: "Title of Popup 3",
//     overview: "",
//     methodology: "",
//     result: ""
//   },
//   {
//     id: 4,
//     title: "Title of Popup 4",
//     overview: "",
//     methodology: "",
//     result: ""
//   },
// ]