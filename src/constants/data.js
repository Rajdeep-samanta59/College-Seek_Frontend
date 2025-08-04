export const categories = [
    { id: 1, type: "MEMORIES" },
    { id: 2, type: "CSE" },
    { id: 3, type: "IT" },
    { id: 4, type: "ECE" },
    { id: 5, type: "EE" },
    { id: 6, type: "ME" },
];

// The `data.js` file defines a static array named `categories`, which contains a list of category objects. Each object has two properties: an `id` (a unique numeric identifier) and a `type` (the name of the category, such as `"CSE"`, `"ECE"`, `"MEMORIES"`, etc.).

// This data is typically used to:

// * Populate dropdowns or filters in the UI so users can categorize or search blog posts by department or theme.
// * Associate posts with specific academic streams or memories.
// * Maintain consistent labeling across the app when assigning or displaying post categories.

// Since it’s static and not fetched from an API, this file helps quickly reference and render category options wherever needed.
