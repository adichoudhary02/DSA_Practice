const { twoSum } = require('./QT_1');
const prompt = require('prompt-sync')();

// ---------- PREDEFINED TEST CASES ----------

const testCases = [
    [
        [2, 7, 11, 15],
        9,
        [0, 1]
    ],
    [
        [3, 2, 4],
        6,
        [1, 2]
    ],
    [
        [3, 3],
        6,
        [0, 1]
    ],
    [
        [3, 3, 5, 8, 3, 9],
        11,
        [1, 3]
    ],
    [
        [3, 5, 2, 7, 9],
        14,
        [1, 4]
    ]
];

// ---------- TEST FUNCTION ----------

function test(nums, target, expected = null) {
    console.log("---------------------------------");
    console.log("Input:", nums, "| Target:", target);

    try {
        const result = twoSum(nums, target);

        console.log("Output:", result);

        if (expected !== null) {
            console.log("Expected:", expected);

            const pass =
                JSON.stringify(result) === JSON.stringify(expected);

            console.log(pass ? "✅ PASS" : "❌ FAIL");
        } else {
            console.log("ℹ️ Custom run (no expected result to compare)");
        }

    } catch (e) {
        console.log("❌ Exception:", e.message);
    }
}

// ---------- RUN PREDEFINED ----------

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

    let numsInput = prompt("Enter array (comma-separated): ");
    let target = Number(prompt("Enter target: "));

    let nums = numsInput.split(',').map(Number);

    test(nums, target);
}

// ---------- MAIN MENU ----------

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