const nextJest = require('next/jest')

const createJestConfig = nextJest({
    //Provide the path to your Next.js app to load next.config.js
    dir: './',
})

//Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    //Add more setup options before each test is run
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
}

//createJestConfig is exported this way to ensure that next/jest can
module.exports = createJestConfig(config)