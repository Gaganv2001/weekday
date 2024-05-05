const filtersData = [
  {
    menuItems: [
      {
        title: "Backend",
        value: "backend",
        category: "Engineering",
      },
      { title: "Frontend", value: "frontend", category: "Engineering" },
      { title: "Fullstack", value: "fullstack", category: "Engineering" },
      { title: "Android", value: "android", category: "Engineering" },
      { title: "IOS", value: "ios", category: "Engineering" },
      { title: "Flutter", value: "flutter", category: "Engineering" },
      { title: "React Native", value: "reactnative", category: "Engineering" },
      { title: "Tech Lead", value: "techlead", category: "Engineering" },
      { title: "Dev-Ops", value: "devops", category: "Engineering" },
      { title: "Data Science", value: "datascience", category: "Engineering" },
      {
        title: "Data Engineer",
        value: "dataengineer",
        category: "Engineering",
      },
      {
        title: "Computer Vision",
        value: "computervision",
        category: "Engineering",
      },
      {
        title: "Deep Learning",
        value: "deeplearning",
        category: "Engineering",
      },
      { title: "NLP", value: "nlp", category: "Engineering" },
      { title: "Designer", value: "designer", category: "DESIGN" },
      {
        title: "Graphic Designer",
        value: "graphicDesigner",
        category: "DESIGN",
      },
      { title: "Design Manager", value: "designManager", category: "DESIGN" },
      {
        title: "Product Designer",
        value: "productDesigner",
        category: "DESIGN",
      },
      {
        title: "Product Manager",
        value: "productManager",
        category: "PRODUCT",
      },
      {
        title: "Business Analyst",
        value: "businessAnalyst",
        category: "BUSINESS ANALYST",
      },
      {
        title: "Data Analyst",
        value: "dataAnalyst",
        category: "DATA ANALYST",
      },
    ],
    placeholder: "Roles",
    multi: true,
    categorized: true,
    width: 200,
    filterKey: "jobRole",
  },
  {
    menuItems: [
      {
        title: "11-20",
        value: "11-20",
      },
      {
        title: "21-50",
        value: "21-50",
      },
      {
        title: "51-100",
        value: "51-100",
      },
      {
        title: "101-200",
        value: "101-200",
      },
      {
        title: "201-500",
        value: "201-500",
      },
      {
        title: "500+",
        value: "500+",
      },
    ],
    placeholder: "Number of Employees",
    multi: true,
    categorized: false,
    width: 250,
    filterKey: "employees",
  },
  {
    menuItems: [
      { title: "1", value: 1 },
      { title: "2", value: 2 },
      { title: "3", value: 3 },
      { title: "4", value: 4 },
      { title: "5", value: 5 },
      { title: "6", value: 6 },
      { title: "7", value: 7 },
      { title: "8", value: 8 },
      { title: "9", value: 9 },
      { title: "10", value: 10 },
    ],
    placeholder: "Experience",
    multi: false,
    categorized: false,
    width: 150,
    filterKey: "minExp",
  },
  {
    menuItems: [
      {
        title: "Remote",
        value: "remote",
      },
      {
        title: "Hybrid",
        value: "hybrid",
      },
      {
        title: "In-Office",
        value: "inOffice",
      },
    ],
    placeholder: "Remote",
    multi: true,
    categorized: false,
    width: 130,
    filterKey: "location",
  },
  {
    menuItems: [
      {
        title: "Python",
        value: "python",
      },
      {
        title: "JAVA",
        value: "java",
      },
      {
        title: "C++",
        value: "cpp",
      },
    ],
    placeholder: "Tech Stack",
    multi: true,
    categorized: false,
    width: 150,
    filterKey: "techStack",
  },
  {
    menuItems: [
      { title: "0L", value: "0" },
      { title: "10L", value: 10 },
      { title: "20L", value: 20 },
      { title: "30L", value: 30 },
      { title: "40L", value: 40 },
      { title: "50L", value: 50 },
      { title: "60L", value: 60 },
      { title: "70L", value: 70 },
    ],
    placeholder: "Min Base Pay",
    multi: false,
    categorized: false,
    width: 250,
    filterKey: "minJdSalary",
  },
];

export default filtersData;
