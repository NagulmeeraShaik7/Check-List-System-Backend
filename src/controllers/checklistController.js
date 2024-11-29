const { fetchApplicationData } = require('../services/dataService.js');
const rules = require('../config/rules');



const evaluateChecklist = async (req, res) => {
    try {
        const data = await fetchApplicationData();

        const results = rules.map((rule) => ({
            id: rule.id,
            name: rule.name,
            status: rule.condition(data) ? "Passed" : "Failed",
        }));

        res.render('dashboard', { results });
    } catch (error) {
        res.status(500).json({ error: "Error evaluating checklist" });
    }
};




module.exports = { evaluateChecklist };
