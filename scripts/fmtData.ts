export async function fmtData() {
  await new Deno.Command("deno", {
    args: [
      "fmt",
      "./data",
    ],
  }).output();
}
