const { countSundays } = require('./QT_4');
const prompt = require('prompt-sync')();

// ---------- TEST CASES ----------

const testCases = [
    ["mon", 13, 2],
    ["sun", 7, 1],
    ["sun", 14, 2],
    ["wed", 10, 1],
    ["fri", 5, 0]
];

// ---------- TEST FUNCTION ----------

function test(startDay, n, expected = null) {
    console.log("---------------------------------");
    console.log("Input:", startDay, "| Days:", n);

    try {
        const result = countSundays(startDay, n);

        console.log("Output:", result);

        if (expected !== null) {
            console.log("Expected:", expected);

            const pass = result === expected;
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

    let day = prompt("Enter start day (mon/tue/...): ").toLowerCase();
    let n = Number(prompt("Enter number of days: "));

    test(day, n);
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