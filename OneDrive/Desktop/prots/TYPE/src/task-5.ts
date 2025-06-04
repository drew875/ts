function logStatus(status: "loading" | "success" | "error"): void {
    if (status === "loading") {
        console.log("Loading...");
    }
    if (status === "success") {
        console.log("Success!");
    }
    if (status === "error") {
        console.log("Something went wrong");
    }
}

logStatus("loading");
