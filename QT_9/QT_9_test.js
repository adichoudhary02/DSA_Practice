const { mysteriousSum } = require('./QT_9');
const prompt = require('prompt-sync')();

// ---------- TEST CASES ----------

const testCases = [
    [99, 3, 9],
    [1234, 2, 2],
    [5, 1, 5],
    [0, 5, 0],
    [999, 0, 0]
];

// ---------- TEST FUNCTION ----------

function test(N, R, expected = null) {
    console.log("---------------------------------");
    console.log("Input:", N, "| R:", R);

    try {
        const result = mysteriousSum(N, R);

        console.log("Output:", result);

        if (expected !== null) {
            console.log("Expected:", expected);
            console.log(result === expected ? "✅ PASS" : "❌ FAIL");
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

    let N = Number(prompt("Enter N: "));
    let R = Number(prompt("Enter R: "));

    test(N, R);
}

// ---------- MAIN ----------

function main() {
    console.log("\n===== DSA PRACTICE RUNNER =====");
    console.log("1. Run Predefined Test Cases");
    console.log("2. Run Custom Input");

    let choice = prompt("Choose option (1 or 2): ");

    if (choice === "1") runPredefined();
    else if (choice === "2") runCustom();
    else console.log("❌ Invalid choice");
}

main();