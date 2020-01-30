let model;
(async function() {
  model = await tf.loadLayersModel("./tfjs_files/model.json");
  console.log(model);
})();

document.getElementById("submit").onclick = function() {
  handleSubmit();
};

function handleSubmit() {
  let irisClasses = ["SETOSA", "VERSICOLOR", "VERGINICA"];
  let sepalLength = document.querySelector(".sepalLength").value;
  let sepalWidth = document.querySelector(".sepalWidth").value;
  let petalLength = document.querySelector(".petalLength").value;
  let petalWidth = document.querySelector(".petalWidth").value;

  x = tf.tensor2d(
    [
      [
        parseInt(sepalLength),
        parseInt(sepalWidth),
        parseInt(petalLength),
        parseInt(petalWidth)
      ]
    ],
    [1, 4]
  );

  console.log();

  const prediction = model.predict(x).squeeze();
  console.log(prediction.print());
  let final_res = prediction.argMax().dataSync()[0];
  console.log(final_res);
  document.getElementById("result").textContent =
    "Flower is Iris  : " + irisClasses[final_res];
}
