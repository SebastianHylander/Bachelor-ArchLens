# Discussions about the programs architecture

### Generating the Diagram Graph through Arch-Lens

#### Set CLI flag to output as JSON

To ensure that Arch-Lens stays true to the current implementation, it is proposed, that a flag is introduced to the
command line tool. This flag, "--output-json", wil allow Arch-Lens to output the diagram graph as a JSON-file,
instead of generating a .PNG through a PlantUML server. This would allow the Visual Studio Code extension
to generate a diagram as JSON, and render it through it's own engine, completely bypassing the PlantUML server.
Furthermore, the plantUML server is sometimes unavailable.

    ./src/cli_interface.py --output-json -p="<SomePath>"