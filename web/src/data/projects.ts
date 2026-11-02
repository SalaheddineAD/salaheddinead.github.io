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
    id: 'tariff', cat: 'GenAI', title: 'Tariff 360: AI tariff intelligence',
    tagline: 'Turns new US tariff rules into dollar exposure and sourcing decisions.',
    summary: 'I owned Tariff 360 end to end, from problem framing and the ROI case to the architecture and the shipped system. Agents read, retrieve and explain regulation; a deterministic Python engine computes every dollar, so no financial figure ever comes from model output.',
    results: ['1,811 parts modeled', '$2.0B in annual imports', '$384M in annual duty', '$205M sourcing opportunity on POC data'],
    bullets: [
      'Architected versioned ingestion from the Federal Register, USTR, CBP and USITC, with SHA-256 change detection, append-only rule versions and a verification state machine that gates every rule before it drives impact analysis.',
      'Built structured LLM extraction into Pydantic schemas (HTS codes, Chapter 99 headings, origins, exclusions, rates, effective dates), with prompts and validation that keep missing values missing instead of inventing them.',
      'Designed a duty engine that stacks MFN, Section 232, Section 301 and IEEPA programs, computes metal content, and allocates exposure to vehicle programs through BOM shares without double counting.',
      'Shipped a rules assistant and a sourcing copilot on the OpenAI Responses API with bounded multi-step tool calling, hybrid retrieval (explicit HTS and docket links plus SQLite FTS5 BM25) and answers grounded in computed landed cost.',
      'Built a multimodal agent that reads engineering drawings into material composition, reconciles mass totals in Python within 1%, and routes every change through human approval with attribution and undo.',
      'Added 12-month scenario and pre-buy simulations covering supplier readiness, capacity, lead time, freight and holding cost, delivered through 23 FastAPI endpoints and a React front end.',
    ],
    stack: 'Python, FastAPI, OpenAI Responses API, Pydantic, SQLite FTS5, React, Vite, Recharts',
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
    id: 'validation', cat: 'MLOps', title: 'Monitoring 6 billion predictions a month',
    tagline: 'The health check behind 100+ Toyota and Lexus production models.',
    summary: 'I designed and built the monthly monitoring and reporting engine for Toyota and Lexus production ML, covering more than 60 million predictions per model. It tells teams which models have drifted, which are unstable and which need retraining.',
    results: ['100+ production models', '6B predictions a month', '60% faster runs'],
    bullets: [
      'Built distributed processing for prediction data at this scale in PySpark and Scala on Databricks.',
      'Implemented drift, anomaly and stability indicators on model inputs and outputs to drive investigation and retraining decisions.',
      'Cut processing time by about 60% through SQL and Spark optimization and a rewrite of the slowest legacy code.',
      'Automated the recurring reports so model health and exceptions across the whole portfolio are reviewed every month.',
    ],
    stack: 'Python, PySpark, Scala, SQL, Databricks, Airflow',
  },
  {
    id: 'ev', cat: 'Data science', title: 'EV battery cost and productivity platform',
    tagline: 'The executive view of cost, productivity and scrap across 4 battery lines.',
    summary: 'I built and run the Cost Obeya platform that leadership and operations teams use to manage four EV battery manufacturing lines. It brings cost, productivity, scrap, production, downtime and financial data into one reconciled view.',
    results: ['4 production lines', 'Actual, budget and forecast', 'Reconciles to source totals'],
    bullets: [
      'Modeled the core KPIs: cost per unit, hours per unit, good parts quantity, scrap amount and scrap ratio, operating income, operating income ratio, net cash flow and sales.',
      'Engineered weighted Cell and Module productivity, mapping production sources with their good parts quantity conversion factors and fiscal year-to-date totals from April.',
      'Allocated shared (Common) scrap across lines 1 to 4 by good parts quantity share, keeping month, process and scrap class, so line views add up to the plant total, negative adjustments included.',
      'Built actual, budget, forecast and cumulative views, and defined SAP ACDOCA and MOM ingestion requirements to automate the Excel-based pipelines.',
      'Added an AI layer that analyzes month-over-month KPI movement and drafts executive summaries.',
      'Validated every change against source data and tested line, process and slicer combinations before release.',
    ],
    stack: 'Power BI, DAX, SAP ACDOCA, SQL, Python, LLMs',
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
    tagline: 'End to end, from architecture to a deployed model scoring live claims.',
    summary: 'I led this for an auto insurer from the first workshop to production: I architected the solution, specified the data the client needed to provide, led a team of two data scientists, and deployed the model into claims processing.',
    results: ['30% lower fraud-related cost', 'Deployed in claims processing', 'Led a team of 2'],
    bullets: [
      'Architected the solution and defined the data requirements with the client: claims history, policy, vehicle and repair data.',
      'Built cleaning and feature engineering in PySpark, including claim-history, timing and repair-cost signals.',
      'Used semi-supervised learning because confirmed fraud labels were scarce: anomaly detection (Isolation Forest, DBSCAN) and self-training extended a small labeled set across the unlabeled claims.',
      'Benchmarked XGBoost, AdaBoost and SVM classifiers, with GPU training on CUDA to iterate quickly on the full claims history.',
      'Deployed the model on Azure as a real-time scoring service, with Power BI dashboards giving investigators a ranked review queue.',
    ],
    stack: 'Python, PySpark, scikit-learn, XGBoost, CUDA, Azure ML, Power BI',
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
    tagline: 'Segments a bank put to work for retention and cross-selling.',
    summary: 'For a retail bank, I built a customer segmentation and assignment engine that marketing and sales teams used to tailor retention and cross-selling strategies by segment.',
    results: ['+20% retention', '+30% cross-selling', '100+ customer KPIs'],
    bullets: [
      'Started with a data quality report and data dictionary covering missing, inconsistent, invalid, duplicate and outlier records.',
      'Engineered more than 100 behavioral and transactional KPIs in PySpark on Databricks.',
      'Compared hierarchical clustering and K-Means, refining the segments with scoring variables tied to the bank’s objectives.',
      'Built an assignment engine that places each new customer in a segment, plus segment profiles the business could act on.',
    ],
    stack: 'Python, PySpark, Databricks, scikit-learn, Power BI',
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
    tagline: 'GPS analytics that informed a $300K infrastructure investment.',
    summary: 'I turned raw GPS data from smartphones, IoT devices and transport systems into mobility flows and bottleneck maps that city decision makers used to commit a $300K investment.',
    results: ['$300K investment informed', 'Multi-source GPS data', 'Bottlenecks mapped'],
    bullets: [
      'Reconciled GPS sources and formats, and cleaned noise, inaccurate fixes and gaps before any analysis.',
      'Applied DBSCAN to find high-density locations and bottlenecks, and built mobility flow datasets from the cleaned points.',
      'Analyzed congestion, trends and travel patterns for urban planning and traffic management.',
      'Built interactive maps, heatmaps and dashboards for decision makers.',
    ],
    stack: 'Python, GeoPandas, scikit-learn, Folium, Plotly, Power BI',
  },
];
