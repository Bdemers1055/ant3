module.exports = {
  components: {
    categories: [
      {
        name: "General",
        include: ["src/Icon/Icon.js", "src/Typography/Typography.js"]
      },
      {
        name: "Actions",
        include: [
          "src/components/HeaderDropdown/index.jsx"
        ]
      }
    ]
  },
  name: "Antd Design 3"
};

/**
 * Currently not supported:
 * 'src/Menu/Menu.js',
 * 'src/ExpansionPanel/ExpansionPanel.js',
 * 'src/ExpansionPanelActions/ExpansionPanelActions.js',
 * 'src/ExpansionPanelDetails/ExpansionPanelDetails.js',
 * 'src/ExpansionPanelSummary/ExpansionPanelSummary.js'
 * 'src/Snackbar/Snackbar.js'
 * 'src/SnackbarContent/SnackbarContent.js'
 */
