# 🌾 AgriVision Demo

An intelligent agricultural monitoring dashboard powered by React and AI-driven diagnostics. AgriVision empowers farmers and agricultural professionals with real-time farm analytics, crop health monitoring, and AI-powered disease detection to optimize yields and prevent crop losses.

![React](https://img.shields.io/badge/React-19.2.5-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.10-646cff?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.19-06b6d4?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Features

### 📊 Real-Time Farm Monitoring
- Interactive geospatial visualization of farm plots
- Live monitoring of multiple crop varieties
- SVG-based polygon mapping for precise plot identification

### 🤖 AI-Powered Crop Diagnostics
- Automated disease detection with confidence scoring
- ML-based crop health assessment
- Severity classification (Mild, Moderate, Severe)
- Tailored remediation recommendations

### 📈 Agronomic Metrics
- **NDVI Trends**: Normalized Difference Vegetation Index tracking
- **SWI Monitoring**: Soil Water Index for irrigation optimization
- **Status Indicators**: Real-time crop health status updates
- **Historical Data**: Multi-temporal crop health tracking

### 🎨 Modern User Interface
- Dark mode optimized dashboard design
- Real-time loading states with visual feedback
- Responsive design with Tailwind CSS
- Smooth animations and transitions
- Color-coded health indicators

### 🔍 Interactive Plot Management
- Multi-plot switching with instant analytics
- Simulated AI inference visualization
- Detailed diagnostic reports per plot
- Quick-access plot overview

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|---|---|---|
| **React** | UI library | 19.2.5 |
| **Vite** | Build tool & dev server | 8.0.10 |
| **Tailwind CSS** | Utility-first styling | 3.4.19 |
| **JavaScript (ES6+)** | Language | Latest |
| **ESLint** | Code quality | 10.2.1 |
| **PostCSS** | CSS processing | 8.5.14 |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v3.0.0 or higher)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone [<repository-url>](https://github.com/Dustless-web/agrivision-demo.git)
cd agrivision-demo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173/` (or the port specified in your terminal).

---

## 📦 Available Scripts

### Development
```bash
# Start development server with HMR
npm run dev
```

### Production Build
```bash
# Build optimized production bundle
npm run build
```

### Preview Production Build
```bash
# Preview the production build locally
npm run preview
```

### Code Quality
```bash
# Run ESLint to check code quality
npm run lint
```

---

## 📁 Project Structure

```
agrivision-demo/
├── public/                 # Static assets
├── src/
│   ├── App.jsx            # Main dashboard component
│   ├── App.css            # Component styles
│   ├── main.jsx           # React entry point
│   ├── index.css          # Global styles
│   └── assets/            # Images, icons, etc.
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── eslint.config.js       # ESLint configuration
├── package.json           # Project dependencies
└── README.md              # This file
```

---

## 💡 Usage

### Viewing Farm Data
1. Open the dashboard to see the AgriVision interface
2. Use the plot selector to switch between different farm plots
3. Each plot displays:
   - Plot name and crop type
   - Current health status
   - Soil Water Index (SWI)
   - NDVI trend graph
   - AI diagnostic results (if available)

### Interpreting AI Diagnostics
- **Disease Detection**: Shows identified crop diseases with ML confidence
- **Severity Levels**: Indicates urgency level for intervention
- **Recommendations**: Provides actionable remediation strategies
- **Confidence Score**: Shows model accuracy percentage

### Color-Coded Health Status
- 🟢 **Green**: Healthy crops, optimal conditions
- 🟡 **Yellow**: Drought stress, moderate concern
- 🔴 **Red**: Disease alert, immediate action required

---

## 🎯 Core Components

### AgriVisionDashboard
The main dashboard component that manages:
- Plot selection and state
- AI analysis simulation
- Real-time data visualization
- UI interactions and animations

### Mock Data Structure
```javascript
{
  id: number,           // Unique plot identifier
  name: string,         // Plot name
  crop: string,         // Crop type
  status: string,       // Current health status
  swi: number,          // Soil Water Index (0-1)
  ndviTrend: array,     // NDVI values over time
  aiDiagnosis: {
    disease: string,    // Disease name
    confidence: string, // ML confidence percentage
    severity: string,   // Severity level
    remedies: array     // Treatment recommendations
  }
}
```

---

## 🔧 Configuration

### Tailwind CSS
Customize the design system in `tailwind.config.js`:
- Color palettes
- Typography
- Custom animations (scan effect)
- Responsive breakpoints

### Vite
Build and dev settings in `vite.config.js`:
- React plugin integration
- Development server options
- Build optimization

### ESLint
Code quality rules in `eslint.config.js`:
- React best practices
- Hook rules validation
- Refresh rules compliance

---

## 🚀 Performance Optimization

The application includes several performance optimizations:
- **Vite's Fast Refresh**: Instant module replacement during development
- **React Strict Mode**: Development checks for potential issues
- **Tailwind Purging**: Only CSS classes used in code are bundled
- **Optimized Build**: Production-ready minification and code-splitting

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards
- Follow ESLint configuration
- Write descriptive commit messages
- Test changes before submitting PRs
- Update documentation as needed

---

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already occupied:
```bash
npm run dev -- --port 3000
```

### Dependencies Installation Issues
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

### Build Errors
```bash
# Ensure all dependencies are installed
npm install

# Clear Vite cache
rm -rf dist .vite

# Rebuild
npm run build
```

---

## 📊 Data Visualization

The dashboard includes:
- **NDVI Graph**: Multi-point trend visualization
- **Status Indicators**: Real-time health metrics
- **SVG Polygons**: Geospatial plot representation
- **Loading States**: Visual feedback during AI analysis

---

## 🔐 Security Considerations

- ESLint ensures code quality and prevents common vulnerabilities
- React Strict Mode catches potential runtime issues
- Regular dependency updates recommended
- Input validation on all user interactions

---

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 🙋 Support

For issues, questions, or suggestions:
- Open a GitHub issue
- Submit a pull request
- Contact the development team

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [JavaScript ES6+ Features](https://es6.io/)

---

## 🌱 Future Enhancements

Potential features for future versions:
- [ ] Real-time weather integration
- [ ] IoT sensor data integration
- [ ] Multi-language support
- [ ] Mobile app version
- [ ] Advanced predictive analytics
- [ ] User authentication and profiles
- [ ] Export functionality (PDF/CSV)
- [ ] Custom alert notifications
- [ ] API backend integration
- [ ] Historical data analysis

---

## 👨‍💻 Development Team

AgriVision is developed by the agricultural technology team, committed to bringing cutting-edge AI to farming.

---

**Made with 🌾 for better farming**

Last Updated: May 2026
