const { maxAquaCurtains } = require('./QT_8');
const prompt = require('prompt-sync')();

// ---------- TEST CASES ----------

const testCases = [
    ["bbbaaababa", 3, 3],
    ["abbbaabbb", 5, 2],
    ["aaaaa", 2, 2],
    ["bbbb", 2, 0],
    ["aab", 5, 2]  // leftover case
];

// ---------- TEST FUNCTION ----------

function test(str, L, expected = null) {
    console.log("---------------------------------");
    console.log("Input:", str, "| L:", L);

    try {
        const result = maxAquaCurtains(str, L);

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

    let str = prompt("Enter string (a/b only): ");
    let L = Number(prompt("Enter L: "));

    test(str, L);
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