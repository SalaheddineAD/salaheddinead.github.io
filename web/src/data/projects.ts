export const categories = ['Forecasting', 'GenAI', 'MLOps', 'Optimization', 'Data science'] as const;
export type Category = (typeof categories)[number];

export interface Project {
  /** Also the photo's file name in src/assets/projects/. */
  id: string;
  cat: Category;
  title: string;
  tagline: string;
  summary: string;
  results: string[];
  bullets: string[];
  stack: string;
}

export const projects: Project[] = [
  {
    id: 'tariff', cat: 'GenAI', title: 'AI tariff intelligence platform',
    tagline: 'Turns new US tariff rules into dollar exposure and sourcing decisions.',
    summary: 'I architected and built a platform that reads changing trade regulation, links it to every affected part, supplier and vehicle program, and recommends sourcing moves. AI agents handle the reading and reasoning; a deterministic engine computes every dollar, so no financial figure ever depends on model output.',
    results: ['1,811 parts modeled', '$2.0B in annual imports', '$384M in annual duty', '$205M sourcing opportunity on POC data'],
    bullets: [
      'Designed a versioned ingestion pipeline over government regulatory sources, with change detection, an audit trail of every rule version and verification gates before a rule can affect any number.',
      'Built structured AI extraction with strict schemas and validation, so missing information stays missing instead of being invented.',
      'Engineered a duty calculation engine that stacks overlapping tariff programs and allocates exposure across parts, suppliers and vehicle programs without double counting.',
      'Shipped tool-using AI agents with hybrid search and multimodal document understanding, every answer grounded in computed results and every data change approved by a person.',
      'Built 12-month scenario and sourcing simulations, delivered as a production-grade API and web application.',
    ],
    stack: 'Python, FastAPI, LLM agents, Pydantic, hybrid search, React',
  },
  {
    id: 'selection', cat: 'Forecasting', title: 'Global demand forecasting platform',
    tagline: 'Self-service AutoML forecasting used by Toyota markets worldwide.',
    summary: 'I built Toyota’s self-service demand forecasting platform, now used across dozens of countries. Business users upload their series and drivers, pick a horizon and get backtested, explained forecasts without writing code or waiting on a data science team for each run.',
    results: ['Dozens of countries', '14 candidate models', 'Rolling backtests up to 60 cutoffs', 'No code for business users'],
    bullets: [
      'Designed the pipeline from upload to forecast: automated missing-data treatment, statistical outlier detection and replacement, and validation before any model runs.',
      'Added external driver support with automated correlation analysis, feature engineering and feature selection, so markets can bring their own explanatory data.',
      'Integrated statistical (AutoTheta, ETS, Holt-Winters, Seasonal Naive), neural (NHITS, NBEATSx, TiDE) and gradient-boosting models, with manual parameters or automated hyperparameter tuning.',
      'Built rolling-origin backtesting with horizon-level comparison on MAPE, sMAPE, MAE and RMSE, and variance-aware ranking that rewards models that stay accurate, not ones that got lucky once.',
      'Added an AI assistant that explains forecasts and model choices to business users in plain language.',
      'Orchestrated it all on Airflow, SageMaker and Databricks, with MLflow tracking every experiment.',
    ],
    stack: 'Python, Nixtla (StatsForecast, NeuralForecast), LightGBM, XGBoost, Airflow, SageMaker, Databricks, MLflow',
  },
  {
    id: 'drift', cat: 'Forecasting', title: 'Sales forecasting and inventory optimization',
    tagline: 'The platform Toyota uses to decide how many vehicles to build.',
    summary: 'Toyota plans production volume from this vehicle sales forecasting and inventory optimization platform. I develop and harden its models and lifecycle, connecting demand forecasts to inventory, production and dispatch planning.',
    results: ['Drives production volume', 'One model: error 65% to 3.6%', 'Root cause taken to senior leadership'],
    bullets: [
      'Improved forecasting workflows that link vehicle demand predictions to inventory targets and operational planning.',
      'Diagnosed a 12-month vehicle-series model whose error had climbed to 65% MAPE: traced it to data drift rather than the model, fixed it at the source and brought it to 3.6%.',
      'Added drift checks upstream so the same failure is caught before it reaches a forecast.',
      'Automated the model lifecycle, covering training, validation, deployment, monitoring, logging and alerting.',
      'Worked with consulting and business teams to close operational forecasting defects and make the workflows easier to validate and maintain.',
    ],
    stack: 'Python, PySpark, AWS SageMaker, Databricks, MLflow, Airflow',
  },
  {
    id: 'validation', cat: 'MLOps', title: 'Reliability platform for production ML',
    tagline: 'Keeps 100+ production models trustworthy at enterprise scale.',
    summary: 'I designed and built the platform that processes and validates every prediction from more than 100 Toyota and Lexus production models, about 6 billion predictions a month, and tells teams which models they can trust, which have drifted and which need retraining.',
    results: ['6B predictions a month', '100+ production models', 'New reliability metrics', '60% faster processing'],
    bullets: [
      'Architected distributed processing that handles more than 60 million predictions per model every month.',
      'Created new reliability metrics for drift, anomalies and stability across model inputs and outputs, giving teams one consistent way to judge model health.',
      'Turned those signals into automated monthly reliability reports and retraining decisions across the whole model portfolio.',
      'Cut processing time by about 60% through Spark and SQL performance engineering and a rewrite of the slowest legacy code.',
    ],
    stack: 'Python, PySpark, Scala, SQL, Databricks, Airflow',
  },
  {
    id: 'ev', cat: 'Data science', title: 'Manufacturing cost and productivity analytics',
    tagline: 'Analysis that took expert analysts days now runs in minutes.',
    summary: 'For an EV battery manufacturer, I automated the cost, productivity and quality analysis that leadership relies on across four production lines. Work that used to take expert analysts days now runs in minutes, through an engineering pipeline reliable enough that the errors are gone.',
    results: ['Days to minutes', 'Manual errors eliminated', '4 production lines', 'Major gains in results'],
    bullets: [
      'Automated the end-to-end analysis, from raw production and finance data to executive-ready KPIs.',
      'Built a validated, tested data pipeline that reconciles every figure with its source, removing the errors that came with manual work.',
      'Delivered KPIs on cost per unit, labor hours per unit, good parts produced, scrap, sales and operating income, with actual, budget and forecast views.',
      'Added an AI layer that explains month-over-month changes and drafts executive summaries.',
      'Gave leadership a fast, trusted view of where cost and productivity were moving, which helped the company improve its results significantly.',
    ],
    stack: 'Python, SQL, Power BI, LLMs',
  },
  {
    id: 'dispatch', cat: 'Optimization', title: 'Vehicle dispatch optimization',
    tagline: 'Mathematical optimization that allocates vehicles across destinations.',
    summary: 'Forecasts only matter if the vehicles go to the right place. I improved Toyota’s Gurobi dispatch model and automated the program around it, with people reviewing the decisions that need judgment.',
    results: ['+10% optimization objective', '$80M program', '40%+ fewer execution steps'],
    bullets: [
      'Reworked the Gurobi formulation and constraints, raising the objective by 10%.',
      'Connected the optimizer to the sales forecasts and inventory plan so allocation follows demand.',
      'Automated the $80M program’s workflow with human-in-the-loop review, removing more than 40% of the manual steps.',
    ],
    stack: 'Python, Gurobi, Pandas, SQL',
  },
  {
    id: 'rag', cat: 'GenAI', title: 'Grounded document intelligence on AWS',
    tagline: 'Cited answers over 500+ pages, measured on a golden set before launch.',
    summary: 'I designed and built a retrieval-augmented question-answering system on AWS, where every answer cites its source and retrieval quality is measured, not assumed.',
    results: ['92% Recall@5', '0.85 MRR', '90%+ faithfulness'],
    bullets: [
      'Architected ingestion and query flows on Bedrock, OpenSearch Serverless, Lambda, S3 and Step Functions, scaling to zero when idle.',
      'Built hybrid lexical and vector retrieval with reranking, metadata filtering and source attribution on every answer.',
      'Built a golden evaluation set and scored retrieval (Recall@5, MRR) and answer faithfulness before trusting the system with users.',
    ],
    stack: 'AWS Bedrock, OpenSearch Serverless, Lambda, Step Functions, S3, Python',
  },
  {
    id: 'fraud', cat: 'Data science', title: 'Car insurance fraud detection',
    tagline: 'A semi-supervised system that scores every claim for fraud risk.',
    summary: 'I designed and delivered an end-to-end fraud detection system for an auto insurer, from the architecture and data requirements to a deployed, monitored model scoring claims in production. I led a team of two data scientists through it.',
    results: ['30% lower fraud-related cost', 'Semi-supervised learning', 'In production', 'Led a team of 2'],
    bullets: [
      'Architected the system and defined with the client which claims, policy, vehicle and repair data it needed.',
      'Built automated data validation and feature pipelines in PySpark, with claim history, timing and repair-cost signals.',
      'Used semi-supervised learning because confirmed fraud was rare: anomaly detection (Isolation Forest, DBSCAN) and self-training extended a small labeled set across the unlabeled claims.',
      'Trained and benchmarked XGBoost, AdaBoost and SVM models on GPUs with CUDA, with class-imbalance handling and every experiment tracked.',
      'Tuned decision thresholds to the cost of fraud and to investigator capacity, and attached explanations to each flag so investigators see why a claim was flagged.',
      'Deployed it as a real-time scoring service on Azure, with drift monitoring and a retraining loop that turns investigator outcomes into new labels.',
    ],
    stack: 'Python, PySpark, XGBoost, scikit-learn, CUDA, SHAP, MLflow, Azure ML, Power BI',
  },
  {
    id: 'energy', cat: 'Forecasting', title: 'Energy demand and wind production forecasting',
    tagline: 'Production, consumption and demand forecasts for Moroccan energy clients.',
    summary: 'I built forecasting for energy production, consumption and demand, and for wind generation from hourly turbine data across multiple sites, from data quality work through to models in operation.',
    results: ['$200K a month in business benefit', 'Multi-site wind forecasting', 'In operation'],
    bullets: [
      'Ran data quality analysis (gaps, duplicates, inconsistencies, outliers) and presented the findings to the client before modeling.',
      'Added external drivers: weather, Google Trends, HCP indices, Bank Al-Maghrib data and press releases.',
      'Automated an Azure Data Factory pipeline that cleans gigabytes of hourly turbine data into a data lake.',
      'Trained and compared LSTM, GRU, Temporal Fusion Transformer and Prophet models, scored separately for production, demand and consumption.',
      'Used client domain input in sprint reviews to explain unexplained observations and shape new features, then moved the work into operations.',
    ],
    stack: 'Python, PyTorch, TensorFlow, Prophet, Azure Data Factory, Azure Data Lake',
  },
  {
    id: 'segmentation', cat: 'Data science', title: 'Bank customer segmentation',
    tagline: 'Behavioral segments a bank put to work for retention and cross-selling.',
    summary: 'For a retail bank, I turned large volumes of customer and transaction data into behavioral segments and an assignment engine that marketing and sales used to tailor retention and cross-selling.',
    results: ['+20% retention', '+30% cross-selling', '200+ engineered features'],
    bullets: [
      'Processed the bank’s customer and transaction data at scale, starting with a full data quality audit.',
      'Owned all the feature engineering: more than 200 new behavioral and transactional features built for machine learning.',
      'Ran and compared multiple K-Means configurations to find the behavioral clustering that best separated customers.',
      'Reviewed the candidate segmentations with business teams and aligned the final segments with each goal of the project.',
      'Built the assignment engine that places every new customer into a segment, plus profiles the business could act on.',
    ],
    stack: 'Python, PySpark, Databricks, scikit-learn, MLflow, Power BI',
  },
  {
    id: 'tourism', cat: 'Forecasting', title: 'Tourism and cash-flow forecasting',
    tagline: 'Investment and cash-flow forecasts for a tourism group and a utility.',
    summary: 'Two production forecasting engagements: investment intentions for a tourism company, and cash flow for a utility. Both models were integrated into the clients’ own systems.',
    results: ['70% better tourism forecasts', '0.1% MAPE on utility cash flow', 'Both in production'],
    bullets: [
      'Tourism: collected financial, social and market data with Selenium and automated cleaning and transformation in Azure Data Factory.',
      'Tourism: modeled investment intentions with LSTM, GRU and Temporal Fusion Transformer, refined with the client’s domain feedback.',
      'Utility: forecast cash flow from hourly and daily consumption, billing, tariff structures, operating and maintenance costs.',
      'Utility: combined time series and regression methods with domain experts and integrated the models into the client’s financial planning systems.',
    ],
    stack: 'Python, PyTorch, TensorFlow, Selenium, Azure Data Factory, SQL',
  },
  {
    id: 'mobility', cat: 'Data science', title: 'Urban mobility analytics',
    tagline: 'From choosing the data provider to the insights behind a city project.',
    summary: 'I led the analytics for an urban mobility project end to end. My evaluation of competing GPS data providers guided a $300K data purchase, and I then turned that data into the insights, KPIs and maps the project team used to plan its work.',
    results: ['$300K provider decision', 'Origin-destination flows', 'Congestion hotspots', 'Interactive maps'],
    bullets: [
      'Benchmarked GPS data providers on coverage, accuracy and freshness, which guided the $300K choice of provider.',
      'Built the pipeline that cleans and reconciles GPS data from smartphones, IoT devices and transport systems.',
      'Found high-density zones and bottlenecks with DBSCAN and built origin-destination flow datasets.',
      'Defined mobility KPIs: trip volumes and durations, average corridor speeds, peak-hour congestion, dwell times and recurring hotspots.',
      'Built interactive maps, flow maps, heatmaps and dashboards that put these insights in front of decision makers.',
    ],
    stack: 'Python, GeoPandas, H3, scikit-learn, kepler.gl, Plotly, Folium, Power BI',
  },
];
