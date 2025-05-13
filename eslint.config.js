// eslint.config.js

// Importações de pacotes
import globals from "globals";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // Plugin TypeScript ESLint
import tsParser from "@typescript-eslint/parser"; // Parser TypeScript
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier"; // Configuração para desabilitar regras ESLint conflitantes com Prettier

export default [
  // Configuração principal para todos os arquivos JS/TS/JSX/TSX
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Arquivos a serem verificados
    languageOptions: {
      parser: tsParser, // Define o parser TypeScript
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Habilita o parsing de JSX
        },
        ecmaVersion: "latest", // Usa a versão mais recente do ECMAScript
        sourceType: "module", // Permite o uso de módulos ES
        // project: "./tsconfig.json", // Descomente se você quiser regras baseadas em tipo (requer tsconfig.json)
      },
      globals: {
        ...globals.browser, // Globais de ambiente de navegador
        ...globals.jest,    // Globais para testes com Jest
        // Adicione aqui outros globais, se necessário (ex: ...globals.node)
      },
    },
    plugins: {
      "@typescript-eslint": tseslint, // Registra o plugin TypeScript
      react: pluginReact,             // Registra o plugin React
      "react-hooks": reactHooks,      // Registra o plugin React Hooks
    },
    rules: {
      // Regras recomendadas do ESLint (base)
      ...js.configs.recommended.rules,
      // Regras recomendadas do TypeScript ESLint
      ...tseslint.configs.recommended.rules,
      // Se estiver usando regras baseadas em tipo (com 'project' em parserOptions):
      // ...tseslint.configs['recommended-type-checked'].rules,
      // Regras recomendadas do React
      ...pluginReact.configs.recommended.rules,

      // Regras específicas para React Hooks
      "react-hooks/rules-of-hooks": "error", // Garante que as regras dos Hooks sejam seguidas
      "react-hooks/exhaustive-deps": "warn", // Adverte sobre dependências ausentes em Hooks como useEffect

      // Desativa regras que podem ser redundantes ou preferência pessoal
      "react/prop-types": "off", // Desativa a verificação de prop-types (comum em projetos TypeScript)
      "react/react-in-jsx-scope": "off", // Não é mais necessário com o novo JSX transform do React
      "@typescript-eslint/explicit-module-boundary-types": "off", // Permite que os tipos de retorno de funções exportadas sejam inferidos

      // Você pode adicionar/sobrescrever outras regras aqui
      // Exemplo: "@typescript-eslint/no-unused-vars": "warn",
    },
    settings: {
      react: {
        version: "detect", // Detecta automaticamente a versão do React
      },
    },
  },
  // Configuração específica para arquivos de teste
  {
    files: ["**/*.test.{js,ts,jsx,tsx}", "**/*.spec.{js,ts,jsx,tsx}"], // Padrão mais comum para arquivos de teste
    languageOptions: {
      globals: {
        ...globals.jest, // Garante que os globais do Jest estejam disponíveis
      },
    },
    // Você pode adicionar regras específicas para testes aqui, se necessário
    // rules: {
    //   "@typescript-eslint/no-explicit-any": "off", // Pode ser útil desligar em testes
    // }
  },
  // IMPORTANTE: eslint-config-prettier DEVE SER O ÚLTIMO na array.
  // Isso garante que ele desative quaisquer regras de formatação de outras configurações.
  eslintConfigPrettier,
];
