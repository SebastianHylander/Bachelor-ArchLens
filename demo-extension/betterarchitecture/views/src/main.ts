
const json = '{"modules": [{"name": "core", "files": ["bt_file.py", "bt_graph.py", "bt_module.py", "__init__.py"]}, {"name": "plantuml", "files": ["fetch_git.py", "plantuml_file_creator.py", "__init__.py"]}, {"name": "plantumlv2", "files": ["pu_entities.py", "pu_manager.py", "utils.py", "__init__.py"]}, {"name": "utils", "files": ["config_manager_singleton.py", "functions.py", "path_manager_singleton.py", "__init__.py"]}], "files": [{"name": "cli_interface.py", "edge_to": ["path_manager_singleton.py", "config_manager_singleton.py", "pu_manager.py", "bt_graph.py", "fetch_git.py"]}, {"name": "main.py", "edge_to": []}, {"name": "__init__.py", "edge_to": []}, {"name": "bt_file.py", "edge_to": ["bt_module.py"]}, {"name": "bt_graph.py", "edge_to": ["bt_file.py", "bt_module.py"]}, {"name": "bt_module.py", "edge_to": ["bt_file.py"]}, {"name": "__init__.py", "edge_to": []}, {"name": "fetch_git.py", "edge_to": []}, {"name": "plantuml_file_creator.py", "edge_to": ["bt_module.py", "path_manager_singleton.py", "config_manager_singleton.py"]}, {"name": "__init__.py", "edge_to": []}, {"name": "pu_entities.py", "edge_to": ["bt_module.py", "utils.py", "config_manager_singleton.py"]}, {"name": "pu_manager.py", "edge_to": ["bt_graph.py", "pu_entities.py", "utils.py"]}, {"name": "utils.py", "edge_to": ["bt_module.py", "path_manager_singleton.py"]}, {"name": "__init__.py", "edge_to": []}, {"name": "config_manager_singleton.py", "edge_to": []}, {"name": "functions.py", "edge_to": ["bt_graph.py"]}, {"name": "path_manager_singleton.py", "edge_to": []}, {"name": "__init__.py", "edge_to": []}]}'

class GraphFile {
    constructor (
        public name : string,
        public edge_to : Set<GraphFile>,
        public module : GraphModule | undefined
    ) {}
}

class GraphModule {

    constructor (
        public name : string,
        public files : Set<GraphFile>
    ) {}
}

function buildGraph(graph : any){
    const modules = graph["modules"];
    const files = graph["files"];

    let parsedModules = new Map

    let parsedFiles = new Map

    let _filenameToEdges = new Map

    for (let f in files){
        console.log(f)
        let parsedFile = new GraphFile (f["name"], new Set, undefined)
        parsedFiles[f["name"]] = parsedFile
        _filenameToEdges[f["name"]] = f["edge_to"]
    }

    for (let k in parsedFiles){
        let f = parsedFiles[k];
        for(let edge in _filenameToEdges[f.name]) {
            f.edge_to.add(parsedFiles[edge])
        }
    }

    for (let m in modules){
        let parsedModule = new GraphModule (m["name"], new Set);

        for (let f in m["files"]) {
            parsedModule.files.add(parsedFiles[f]);
            parsedFiles[f].module = parsedModule;
        }

        parsedModules[m["name"]] = parsedModule;
    }
    return parsedModules
}

let graph = buildGraph(JSON.parse(json))


// Initialize Cytoscape
var cy = cytoscape({
    container: document.getElementById('test_div'),
    elements: [
        { data: { id: 'A', label: 'Alpha', type: 'special' } },
        { data: { id: 'B', label: 'Beta' } },
        { data: { id: 'C', label: 'Gamma'} },
        { data: { id: 'AB', source: 'A', target: 'B' } },
        { data: { id: 'BC', source: 'B', target: 'C' } } 
    ],
    style: [
        { selector: 'node', style: {
            'background-color': '#3498db',
            'width': '75px', 'height': '50px',
            'shape': 'roundrectangle', 'text-halign': 'center',
            'label': 'data(label)',
            'color': '#fff', 'text-valign': 'center',
            'border-width': 2, 'border-color': '#202020'
        }},
        { selector: 'edge', style: {
            'width': 3, 'line-color': '#2c3e50',
            'target-arrow-shape': 'triangle', 'curve-style': 'bezier'
        }},
        { selector: '[type = "special"]', style: {
            'background-color': 'gold' // Highlights special nodes
        }},

    ],
    layout: { name: 'grid' }
});


// Add a click event to edges
/*
cy.on('tap', 'edge', function(evt) {
    var edge = evt.target;
    vscode.postMessage({ command: "edgeClicked", source: edge.source().id(), target: edge.target().id() });
    
});
*/