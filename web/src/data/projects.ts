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
    id: 'tariff', cat: 'GenAI', title: 'Tariff intelligence platform',
    tagline: 'An MVP that turns new US tariff rules into dollar impact and sourcing moves.',
    summary: 'I owned it end to end: problem framing, the ROI model, the production cost model and the pilot plan, then the full system. LLMs extract, retrieve and explain; deterministic Python computes every dollar figure, so no financial number comes from model output.',
    results: ['1,811 parts modeled', '$2.0B in annual imports', '$384M in annual duty', '$205M sourcing opportunity on POC data'],
    bullets: [
      'Built a pipeline that monitors the Federal Register, USTR, CBP and USITC, detects changes with content hashing, and keeps every rule version.',
      'Designed a duty-stacking engine across MFN, Section 232, Section 301 and IEEPA, broken down by part, vehicle program, plant, supplier and country.',
      'Built a sourcing optimizer, 12-month cost simulation and pre-buy optimizer that flag the switches worth making.',
      'Built a vision agent that reads engineering drawings into material composition, verified in Python and approved by a person before use.',
      'Shipped tool-calling agents with cited answers, a FastAPI backend with 23 endpoints and a React front end.',
    ],
    stack: 'Python, FastAPI, React, OpenAI Responses API, SQLite FTS5, BM25, Pydantic',
  },
  {
    id: 'drift', cat: 'Forecasting', title: 'Rescuing a failing vehicle forecast',
    tagline: 'Found why a 12-month forecast broke: the data, not the model.',
    summary: 'A 12-month vehicle-series forecast at Toyota had degraded badly and the obvious request was to retrain. I traced it to drift in the input data, fixed it at the source and took the root cause to senior leadership.',
    results: ['Error 65% to 3.6%', 'Presented to senior leadership'],
    bullets: [
      'Separated data problems from model problems before touching the model.',
      'Fixed the upstream data and added checks so drift is caught early.',
      'Turned the analysis into recommendations for senior leadership.',
    ],
    stack: 'Python, Spark, Databricks, MLflow',
  },
  {
    id: 'selection', cat: 'Forecasting', title: 'Model selection across 10+ markets',
    tagline: 'One repeatable way to choose forecasting models worldwide.',
    summary: 'Toyota’s global demand forecasting covers markets with very different time series. I built a reusable framework so model choice is systematic, not a judgment call.',
    results: ['10+ markets', 'Reusable across teams'],
    bullets: [
      'Multi-cutoff backtesting and multi-horizon metrics.',
      'Variance-aware scoring that rewards consistency.',
      'Hyperparameter optimization and automated ranking, running on Airflow, SageMaker, Databricks and MLflow.',
    ],
    stack: 'Python, Airflow, SageMaker, Databricks, MLflow',
  },
  {
    id: 'validation', cat: 'MLOps', title: 'Validating 6 billion predictions a month',
    tagline: 'The platform behind 100+ Toyota and Lexus production models.',
    summary: 'I developed and scaled the reporting and validation platform that checks every month’s predictions before they reach decisions, then rebuilt its slowest parts.',
    results: ['100+ production models', '6B predictions a month', '60% faster'],
    bullets: [
      'SQL optimization and Spark performance engineering.',
      'Workflow redesign so steps run in the right order and in parallel.',
      'Refactored legacy code that had grown slow and hard to maintain.',
    ],
    stack: 'PySpark, SQL, Databricks, Airflow',
  },
  {
    id: 'ev', cat: 'GenAI', title: 'Decision intelligence for EV battery lines',
    tagline: 'KPIs and AI-written executive summaries across 4 production lines.',
    summary: 'I architected and delivered an executive platform for EV battery manufacturing that turns leadership questions into financial and operational KPIs.',
    results: ['4 production lines', 'Dozens of KPIs', 'AI executive summaries'],
    bullets: [
      'Translated senior-leadership requirements into financial and operational KPIs.',
      'Automated analytics across data sources to surface cost and performance drivers.',
      'Added an AI layer that analyzes month-over-month KPIs and writes executive summaries.',
    ],
    stack: 'Python, SQL, LLMs',
  },
  {
    id: 'dispatch', cat: 'Optimization', title: 'Vehicle dispatch optimization',
    tagline: 'Better allocation of vehicles across destinations with Gurobi.',
    summary: 'I enhanced a Gurobi-based vehicle-dispatch optimization system, and built automation with human-in-the-loop review for an $80M operational program.',
    results: ['+10% optimization objective', '40%+ fewer execution steps'],
    bullets: [
      'Improved the optimization model and its objective by 10%.',
      'Enabled more efficient vehicle allocation across destination locations.',
      'Simplified an $80M program’s workflow with automation and human review.',
    ],
    stack: 'Python, Gurobi',
  },
  {
    id: 'rag', cat: 'GenAI', title: 'Serverless RAG platform',
    tagline: 'Cited answers over 500+ pages, tested on a golden set.',
    summary: 'An end-to-end retrieval-augmented generation system on AWS that I built and evaluated before trusting it.',
    results: ['92% Recall@5', '0.85 MRR', '90%+ faithfulness'],
    bullets: [
      'Built on Bedrock, OpenSearch Serverless, Lambda, S3 and Step Functions.',
      'Hybrid retrieval, reranking, metadata filtering and source attribution.',
      'Evaluated retrieval and answers against a golden set.',
    ],
    stack: 'AWS Bedrock, OpenSearch Serverless, Lambda, Step Functions',
  },
  {
    id: 'energy', cat: 'Forecasting', title: 'Energy demand forecasting',
    tagline: 'Short- to long-term forecasts using weather and search signals.',
    summary: 'For an energy client in Morocco, I built short-, mid- and long-term forecasting of demand and production.',
    results: ['About $2.4M annualized impact'],
    bullets: [
      'Integrated weather and Google Trends as external signals.',
      'Built data-quality and preprocessing pipelines.',
      'Trained Prophet, GRU and Temporal Fusion Transformer models.',
    ],
    stack: 'Python, Prophet, PyTorch',
  },
  {
    id: 'fraud', cat: 'Data science', title: 'Car insurance fraud detection',
    tagline: 'A model that flags suspicious claims for an insurance client.',
    summary: 'At Sophatel I led the fraud detection model for a car insurance client, working with their team from data to a model they could act on.',
    results: ['30% lower fraud-related cost'],
    bullets: [
      'Led the modeling work for the client’s fraud detection.',
      '[Add: the data you used, the model you chose and how claims were flagged.]',
    ],
    stack: '[Stack]',
  },
  {
    id: 'segmentation', cat: 'Data science', title: 'Bank customer segmentation',
    tagline: 'Customer groups a bank used for retention and cross-selling.',
    summary: 'For a banking client at Sophatel, I segmented customers so the bank could target retention and cross-selling offers by group.',
    results: ['+20% retention', '+30% cross-selling'],
    bullets: [
      'Built the customer segmentation used for retention and cross-selling campaigns.',
      '[Add: the features and clustering method, and how the bank used the segments.]',
    ],
    stack: '[Stack]',
  },
  {
    id: 'tourism', cat: 'Forecasting', title: 'Tourism and cash-flow forecasting',
    tagline: 'Forecasts for a tourism company and a utility in Morocco.',
    summary: 'Two forecasting engagements at Sophatel: investment intentions for a tourism company, and cash flow for a utility.',
    results: ['2 clients', 'Tourism and utilities'],
    bullets: [
      'Forecast investment intentions for a tourism company.',
      'Forecast cash flow for a utility company.',
      '[Add: the models and the improvement each client saw.]',
    ],
    stack: '[Stack]',
  },
  {
    id: 'mobility', cat: 'Data science', title: 'Urban mobility analytics',
    tagline: 'Analysis and dashboards behind a $300K infrastructure decision.',
    summary: 'I analyzed urban mobility data and built dashboards and visuals that supported a $300K infrastructure investment.',
    results: ['$300K investment supported'],
    bullets: [
      'Ran data-quality analysis on the mobility data.',
      'Built heatmaps, maps and dashboards for decision makers.',
    ],
    stack: 'Python, matplotlib, Plotly, Folium, ArcGIS, Power BI',
  },
];
