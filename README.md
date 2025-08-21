# 🐔 Pollería Integral

A modern and functional Landing Page for Peru's most authentic rotisserie chicken chain, developed with React.js.

## 📋 Project Description

Pollería Integral is a Single Page Application (SPA) that showcases our Peruvian rotisserie chicken chain with an attractive and functional design. This project was developed as part of the comprehensive evaluation for the Web Programming II course, meeting all established technical requirements.

## 👥 Development Team

- **Lead Developer**: [Andrea Torres Cerdan](https://github.com/andrea13-12)
- **Collaborator**: [Gean Huaman](https://github.com/GeanhuamanSolis)

## 🏗️ Project Structure

```
integral-polleria/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Gallery/
│   │   ├── Contact/
│   │   ├── Locations/
│   │   └── Footer/
│   ├── styles/
│   ├── assets/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎯 Key Features

### Implemented Sections
- **Header**: Main navigation with pollería logo
- **Hero**: Main section with featured image and primary message
- **Gallery**: Showcase of our most popular dishes
- **Contact Us**: Contact form and company information
- **Locations**: Information about our branches:
  - 🏖️ Beach Location
  - 🏔️ Country Location
  - 🏗️ City Location (Under Construction)
- **Footer**: Contact information and social media

### Technical Features
- ⚛️ Built with **React.js**
- 🎨 Responsive design with **Custom CSS/Tailwind CSS**
- 📱 Mobile-friendly interface
- 🔄 Reusable and modular components
- 📊 **Props** usage for component communication

## 🛠️ Technologies Used

- **Frontend Framework**: React.js
- **Styling**: CSS3
- **Build Tool**: Create React App
- **Version Control**: Git & GitHub

## 🚀 Installation and Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/andrea13-12/integral-polleria.git
   cd integral-polleria
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run in development mode**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Props Implementation

The project implements parent-child communication pattern using props in the following components:

**Component used**: `Locations` (Parent Component) → `LocationCard` (Child Component)

```jsx
// Example of props implementation
<LocationCard 
  title="Beach Location" 
  status="Open" 
  description="Enjoy the best rotisserie chicken by the sea"
  image="/assets/sede-beach.jpg"
/>
```

## 🎨 Design and Theme

- **Color Palette**: Inspired by traditional Peruvian colors
- **Logo**: Custom design representative of the brand
- **Images**: Authentic photographs of Peruvian dishes and atmospheres
- **Typography**: Modern and readable, adapted to brand identity

## 📂 File Organization

The project structure follows React best practices:
- Component separation in individual folders
- Logical organization of styles and assets
- Clear project configuration

## 🔧 Available Scripts

```bash
npm start          # Starts the development server
npm run build      # Builds the app for production
npm test           # Runs the test suite
npm run eject      # Exposes configuration (irreversible)
```

## 📱 Responsive Design

The application is fully optimized for:
- 💻 Desktop (1200px+)
- 📱 Tablet (768px - 1199px)
- 📱 Mobile (320px - 767px)

## 🤝 Contributing

This project was developed as part of an academic evaluation. Contributions are limited to the development team members.

## 📄 License

This project is for academic use and has no commercial purposes.

## 📞 Contact

For project inquiries:
- **GitHub**: [Andrea Torres Cerdan](https://github.com/andrea13-12)
- **Collaborator**: [GeanhuamanSolis](https://github.com/GeanhuamanSolis)

---

**Developed with ❤️ for Web Programming II Course - ISIL 2025**
