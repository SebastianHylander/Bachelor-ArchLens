# Introduction Metting - 13/02/2025

## Questions

- What is the process in general?
- How long is the paper supposed to be?
- How can we make our problem statement more focused, and acedemically relevant?
- What is our angle?
- What literature should we read?
- Should we have access to the GitHub organization?
    - Should we develop in our own fork?
    - Should we develop directly in the organization repo, and have pull requests approved?
- Which features would Mircea like to see?

## Answers

- How can we provide knowledge, without it just being implementation specific.
    - We should try to make the knowledge usefull in the long term.
    - Take a step back. Talk about the programs in abstract view.
        - What is the architecture of such a program.
        - Maybe it can be tested with people?
            - Only if developed fast enough
- Length: Visoft is around 8 pages double columns.
    - Should be concise.
    - Could be very similar to Codoc paper.
- Program finished end of march.
- 1.5 month for evalutation.
- __CHALLENGE__: Start early with testing with test subjects, so we can iron some bugs out.
    - Set up a test quickly.
- We need to set up a related work section in our thesis.
- Mircea will send some, we will also find something ourselves.
- We will work in parallel on case studies, code.


## Current expansion ideas:
 - Generate and see specified views directly in VsCode.
 - Interactive edges (Click edge for info and a ‘jump-to-line’ button).
 - More diagrams (Add UML)?
 - Integrate version-control (Select commit to compare with current).
   - Diff-view
 - Export picture of graph.
 - Be able to define views, that are saved to the arch-lens config, in the editor.
 - Be able to define multiple different views, that can be switched between in the editor.

 
 ## Priority:
- Make Archlens more interactive.
    - Showing the cause of a dependency.
        - List of files.
        - Click even further to navigate to the line.
- Configuration from IDE.
- Git Diff.
- Rewrite the graph engine to JavaScript instead of PlantUML.



Fix bt_graph

        python3 setup.py development