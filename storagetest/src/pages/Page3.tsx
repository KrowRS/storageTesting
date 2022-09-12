function addEntry() {
  // Parse any JSON previously stored in allEntries
  var existingEntries: any = JSON.parse(
    localStorage.getItem("allEntries") as any
  );
  if (existingEntries == null) existingEntries = [];
  var page = {
    page: "Page3",
    userID: "3",
  };
  interface page {
    name: any;
    userID: any;
  }
  localStorage.setItem("entry", JSON.stringify(page));
  // Save allEntries back to local storage
  existingEntries.push(page);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));
}
export default function Page2() {
  addEntry();
  return (
    <>
      <main className="flex-1">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="py-4">
              <h1>Page3</h1>
            </div>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </>
  );
}
