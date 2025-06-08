# BHIVE React Application

*A modern workspace booking application built with React, TypeScript, and Redux*

## Live Demo

👉 [View deployed application](https://bhive-react-sks.vercel.app/)

## Features

- **Responsive Design**: Works seamlessly across phones, tablets, and desktops
- **State Management**: Powered by Redux Toolkit for efficient state handling
- **Type Safety**: Built with TypeScript for robust development
- **Modern UI**: Clean, aesthetic interface with Tailwind CSS styling
- **Routing**: Client-side navigation with React Router DOM

## Technologies Used

- React 19
- TypeScript
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Testing Library (for unit tests)

## Project Structure

```markdown
├── public/static_assets/  # Static assets like images and videos
src/
├── components/         
│   ├── Header/         
│   │   └── Header.tsx
│   ├── Banner/         
│   │   └── Banner.tsx
│   ├── WhyChooseUs/    
│   │   ├── WhyChooseUs.tsx
│   │   └── FeatureCard.tsx
│   ├── SpaceOverview/  
│   │   └── SpaceOverview\.tsx
│   ├── DownloadApp/    
│   │   └── DownloadApp.tsx
│   └── Footer/         
│       └── Footer.tsx
├── store/              
│   ├── slices/         
│   │   └── workspaceSlice.ts
│   ├── hooks.ts        
│   └── store.ts        
├── types/              
│   └── workspace.ts
├── utils/              
├── App.tsx             
├── index.tsx           
└── index.css           

````

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm 

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bhive-react-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd bhive-react-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from create-react-app (advanced use)

## Development Approach

1. **Component-Based Architecture**: The UI is broken down into reusable components
2. **TypeScript Integration**: Strong typing throughout the application
3. **Redux State Management**: Centralized state for workspace data
4. **Responsive Design**: Mobile-first approach with Tailwind CSS
5. **API Integration**: Workspace data treated as API responses

## Deployment

The application is deployed on Vercel for static hosting. The deployment process is automated through Vercel's CI/CD pipeline.



## License

[MIT](https://choosealicense.com/licenses/mit/)
```

This README includes:
1. Project overview
2. Live demo link
3. Key features
4. Technology stack
5. Folder structure visualization
6. Setup instructions
7. Development approach
8. Deployment information
11. License information

