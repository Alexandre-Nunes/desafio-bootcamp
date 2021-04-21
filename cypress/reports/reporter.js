
const options = {

    theme: 'bootstrap',
    output: 'mochawesome-report/index.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Name": "Demo Automation",
        "Test Environment": "STAGING",
        "Browser": "Electron",
        "Platform": "Windows 10",
        "Executed": "Local"
    }
}

reporter.generate(options)