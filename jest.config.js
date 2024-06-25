module.exports = {
    preset: 'ts-jest',                // Utiliser ts-jest comme pré-réglage
    testEnvironment: 'node',          // Spécifier l'environnement de test pour Node.js
    roots: [
      "<rootDir>/tests"               // Définir le dossier racine des tests
    ],
    testMatch: [
      "**/?(*.)+(spec|test).ts?(x)"   // Trouver des fichiers de test avec les extensions .ts, .tsx, .spec.ts, .test.ts
    ],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"    // Utiliser ts-jest pour transformer les fichiers TypeScript en JavaScript
    },
    moduleFileExtensions: [
      "ts",                           // Extensions de fichiers pour les modules
      "tsx",
      "js"
    ],
    collectCoverage: true,            // Activer la collecte de couverture de code
    collectCoverageFrom: [
      "src/**/*.{ts,tsx}",            // Collecter la couverture de code des fichiers TypeScript dans src
      "!src/**/*.d.ts"                // Exclure les fichiers de déclaration .d.ts
    ],
    coverageDirectory: "coverage"     // Dossier de sortie pour les rapports de couverture
  };
  