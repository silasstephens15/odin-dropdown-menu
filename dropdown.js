function createDropDownMenu($parent) {
  const $container = document.createElement("div");
  const $drop = document.createElement("div");
  $drop.setAttribute("hidden", "");

  const $openButton = document.createElement("button");
  $openButton.textContent = "Open";
  $container.appendChild($openButton);

  const options = ["option1", "option2", "option3"];

  for (let i = 0; i < options.length; i++) {
    const $option = document.createElement("button");
    $option.textContent = options[i];
    $drop.appendChild($option);
  }
  $container.appendChild($drop);
  $parent.appendChild($container);
}
