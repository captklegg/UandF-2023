window.addEventListener('load', () => {
			hljs.highlightAll();
		});

		function showAndHightlightCode(sliderElement) {
			const highlightButton = window.event.target;
			if (!sliderElement) {
				sliderElement = highlightButton.parentElement.querySelector(".swiffy-slider");
			}
			if (!sliderElement) {
				sliderElement = highlightButton.parentElement;
			}
			//Remove excess indention from markup
			const lines = sliderElement.outerHTML.split("\n");
			const lastLine = lines[lines.length - 1];
			const numberOfSpacers = lastLine.indexOf("<");
			const spaceString = lastLine.substring(0, numberOfSpacers);
			console.log(numberOfSpacers.length);
			let markup = "";
			for (let i = 0; i < lines.length; i++) {
				const line = lines[i];
				if (line.startsWith(spaceString)) {
					markup += line.substring(numberOfSpacers) + "\n";
				} else {
					markup += line + "\n";
				}
			}

			const highlightedCode = hljs.highlight(markup, {
				language: 'html'
			}).value;

			const newPre = document.createElement("pre");
			newPre.classList.add("p-2");
			newPre.classList.add("p-lg-4");
			newPre.classList.add("my-2");
			newPre.classList.add("my-lg-4");
			newPre.classList.add("bg-light");
			const newCode = document.createElement("code");
			newCode.classList.add("language-html");
			newCode.innerHTML = highlightedCode;
			newPre.appendChild(newCode);

			highlightButton.parentElement.insertBefore(newPre, null);
			highlightButton.remove();