anychart.onDocumentReady(function() {
  var data = {
  header: ["Name", "Death toll"],
  rows: [
    ["11 am", 2],
    ["12 pm", 3],
    ["1 pm", 4],
    ["2 pm", 4],
    ["3 pm", 0],
    ["4 pm", 4],
    ["5 pm", 5]
  ]};
  var chart = anychart.column();
  chart.data(data);
  chart.title("The deadliest earthquakes in the XXth century");
  chart.container("container");
  chart.draw();
});