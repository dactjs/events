const URL =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=o5kJjhlE-0KHmWDnkx7JK6FjdmYwW7lJjYVY6zMrPypUOUpUMlBQNFFONldRUzcwVks4UkI4T1dOUi4u&embed=true";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <iframe src={URL} className="h-screen w-screen" />
    </main>
  );
}
