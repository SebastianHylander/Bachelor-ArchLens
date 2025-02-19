# Discussions about the programs architecture

### Generating the Diagram Graph through Arch-Lens

#### Set CLI flag to output as JSON

To ensure that Arch-Lens stays true to the current implementation, it is proposed, that a flag is introduced to the
command line tool. This flag, "--output-json", wil allow Arch-Lens to output the diagram graph as a JSON-file,
instead of generating a .PNG through a PlantUML server. This would allow the Visual Studio Code extension
to generate a diagram as JSON, and render it through it's own engine, completely bypassing the PlantUML server.
Furthermore, the plantUML server is sometimes unavailable.

    ./src/cli_interface.py --output-json -p="<SomePath>"

## Project structure

It was discussed how the project itself should be structured.
Three main options were discussed:

- Both the "View" and Backend code reside in the same source directory.
- "View" and backend code reside in different folder, but with a shared package manager.
- Both projects are completely seperated, although they reside in the same Git repository.
	- This would make both project's package managers completely seperate of eachother.
	- [x] This is the chosen solution, since it allows us to granularly control the dependencies of both projects.
	- Both projects import packages with the same name, that are actually very different from eachother.
	- Having both projects with the same package manager gave many problems with imports and type checking
