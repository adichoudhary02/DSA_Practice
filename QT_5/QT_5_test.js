const { sortByRisk } = require('./QT_5');
const prompt = require('prompt-sync')();

// ---------- TEST CASES ----------

const testCases = [
    [[1,0,2,0,1,0,2], [0,0,0,1,1,2,2]],
    [[2,1,0,2,1,0,0,1,2,0], [0,0,0,0,1,1,1,2,2,2]],
    [[0,0,0], [0,0,0]],
    [[2,2,2], [2,2,2]],
    [[1,1,1], [1,1,1]]
];

// ---------- TEST FUNCTION ----------

function test(arr, expected = null) {
    console.log("---------------------------------");
    console.log("Input:", arr);

    try {
        const result = sortByRisk([...arr]);

        console.log("Output:", result);

        if (expected !== null) {
            console.log("Expected:", expected);

            const pass =
                JSON.stringify(result) === JSON.stringify(expected);

            console.log(pass ? "✅ PASS" : "❌ FAIL");
        } else {
            console.log("ℹ️ Custom run");
        }

    } catch (e) {
        console.log("❌ Exception:", e.message);
    }
}

// ---------- PREDEFINED ----------

function runPredefined() {
    console.log("\n🚀 Running Predefined Test Cases...\n");

    testCases.forEach((t, i) => {
        console.log(`TEST CASE #${i + 1}`);
        test(...t);
    });
}

// ---------- CUSTOM INPUT ----------

function runCustom() {
    console.log("\n🧠 Custom Input Mode\n");

    let input = prompt("Enter array (comma-separated 0/1/2): ");
    let arr = input.split(',').map(Number);

    test(arr);
}

// ---------- MAIN ----------

function main() {
    console.log("\n===== DSA PRACTICE RUNNER =====");
    console.log("1. Run Predefined Test Cases");
    console.log("2. Run Custom Input");

    let choice = prompt("Choose option (1 or 2): ");

    if (choice === "1") {
        runPredefined();
    } else if (choice === "2") {
        runCustom();
    } else {
        console.log("❌ Invalid choice");
    }
}

main();