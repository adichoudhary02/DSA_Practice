const { productOfDigits } = require('./QT_7');
const prompt = require('prompt-sync')();

// ---------- TEST CASES ----------

const testCases = [
    [5244, 160],
    [111, 1],
    [123, 6],
    [999, 729],
    [100, 0]
];

// ---------- TEST FUNCTION ----------

function test(n, expected = null) {
    console.log("---------------------------------");
    console.log("Input:", n);

    try {
        const result = productOfDigits(n);

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

    let n = Number(prompt("Enter number: "));
    test(n);
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