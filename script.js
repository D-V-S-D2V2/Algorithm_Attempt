class BFS {
    constructor() {
        this.widthInput = document.getElementById("grid_width");
        this.lengthInput = document.getElementById("grid_length");
        this.startXInput = document.getElementById("start_x");
        this.startYInput = document.getElementById("start_y");
        this.endXInput = document.getElementById("end_x");
        this.endYInput = document.getElementById("end_y");
        this.generateBtn = document.getElementById("generate_btn");
        this.start = [Number(this.startXInput.value), Number(this.startYInput.value)];
        this.end = [Number(this.endXInput.value), Number(this.endYInput.value)];
        this.path = [];
        console.log(this.path)
        this.path = []
        console.log(this.path)
        this.prime = {};
        this.visited = [];

        this.algo_btn = document.getElementById("run_btn");

        this.generateBtn.addEventListener("click", () => {
            this.generateGrid();
        });

        this.algo_btn.addEventListener("click", () => {
            this.start = [Number(this.startXInput.value), Number(this.startYInput.value)];
            this.end = [Number(this.endXInput.value), Number(this.endYInput.value)];
            if (document.getElementById("BFS").checked) {
                this.runBFS();
            } else {
                console.log("Nothing here");
            }
            this.showPath();
        });


    }

    runBFS() {
        console.log(this.path)
        this.visited.unshift(this.start);
        this.path.unshift(this.start);
        console.log(this.path)
        // console.log(this.checkVisited(1,1));
        // console.log(this.table.rows[(this.path[this.path.length-1][1]-1)].cells[(this.path[this.path.length-1][0]-1)].style.borderTop == "5px solid blue")
        // console.log(this.table.rows[(this.path[this.path.length-1][1]-1)].cells[(this.path[this.path.length-1][0]-1)])
        
        while (true) {
            try {
                if (!this.checkVisited(this.path[this.path.length-1][0], this.path[this.path.length-1][1] - 1) && !this.table.rows[this.path[this.path.length-1][1]-1].cells[this.path[this.path.length-1][0]-1].style.borderTop.includes("blue") && !this.table.rows[(this.path[this.path.length-1][1]-1) - 1].cells[this.path[this.path.length-1][0]-1].style.borderBottom.includes("blue")) {
                    this.prime[[this.path[this.path.length-1][0], this.path[this.path.length-1][1] - 1]] = [[this.path[this.path.length-1][0], this.path[this.path.length-1][1]]];
                    this.path.unshift([this.path[this.path.length-1][0], this.path[this.path.length-1][1] - 1]);
                    this.visited.unshift([this.path[this.path.length-1][0], this.path[this.path.length-1][1] - 1]);
                    this.table.rows[this.path[this.path.length-1][1]-1].cells[this.path[this.path.length-1][0]-1].style.backgroundColor = "lightgreen";
                }
            } catch (error) {}

            try {
                if (!this.checkVisited(this.path[this.path.length-1][0], this.path[this.path.length-1][1] + 1) && !this.table.rows[this.path[this.path.length-1][1]-1].cells[this.path[this.path.length-1][0]-1].style.borderBottom.includes("blue") && !this.table.rows[(this.path[this.path.length-1][1]-1) + 1].cells[this.path[this.path.length-1][0]-1].style.borderTop.includes("blue")) {
                    this.prime[[this.path[this.path.length-1][0], this.path[this.path.length-1][1] + 1]] = [[this.path[this.path.length-1][0], this.path[this.path.length-1][1]]];
                    this.path.unshift([this.path[this.path.length-1][0], this.path[this.path.length-1][1] + 1]);
                    this.visited.unshift([this.path[this.path.length-1][0], this.path[this.path.length-1][1] + 1]);
                    this.table.rows[this.path[this.path.length-1][1]-1].cells[this.path[this.path.length-1][0]-1].style.backgroundColor = "lightgreen";
                }
            } catch (error) {}

            try {
                if (!this.checkVisited((this.path[this.path.length-1][0] - 1), this.path[this.path.length-1][1]) && !this.table.rows[this.path[this.path.length-1][1]-1].cells[this.path[this.path.length-1][0]-1].style.borderLeft.includes("blue") && (!this.table.rows[this.path[this.path.length-1][1]-1].cells[(this.path[this.path.length-1][0]-1) - 1].style.borderRight.includes("blue") || this.path.length-1[0]-1 == 0)) {
                    this.prime[[this.path[this.path.length-1][0] - 1, this.path[this.path.length-1][1]]] = [[this.path[this.path.length-1][0], this.path[this.path.length-1][1]]];
                    this.path.unshift([this.path[this.path.length-1][0] - 1, this.path[this.path.length-1][1]]);
                    this.visited.unshift([this.path[this.path.length-1][0] - 1, this.path[this.path.length-1][1]]);
                    console.log("color changed 2 ")
                    this.table.rows[this.path[this.path.length-1][1]-1].cells[this.path[this.path.length-1][0]-1].style.backgroundColor = "lightgreen";
                }       
                    console.log("color changed ")

            } catch (error) {}
            try {
                if (!this.checkVisited(this.path[this.path.length-1][0] + 1, this.path[this.path.length-1][1]) && !this.table.rows[this.path[this.path.length-1][1]-1].cells[this.path[this.path.length-1][0]-1].style.borderRight.includes("blue") && (!this.table.rows[this.path[this.path.length-1][1]-1].cells[(this.path[this.path.length-1][0]-1) + 1].style.borderLeft.includes("blue") || this.path.length-1[0]-1 == (this.columnCount()-1))) {
                    this.prime[[this.path[this.path.length-1][0] + 1, this.path[this.path.length-1][1]]] = [[this.path[this.path.length-1][0], this.path[this.path.length-1][1]]];
                    this.path.unshift([this.path[this.path.length-1][0] + 1, this.path[this.path.length-1][1]]);
                    this.visited.unshift([this.path[this.path.length-1][0] + 1, this.path[this.path.length-1][1]]);
                    console.log("color changed 4")
                    this.table.rows[this.path[this.path.length-1][1]-1].cells[this.path[this.path.length-1][0]-1].style.backgroundColor = "lightgreen";
                    console.log("color changed 6")
                }
            } catch (error) {}
            
            // for (let i = 0; i < this.path.length, i++;) {
            //     console.log("smth")
            //     console.log(i)
            // }
            console.log(this.path.length)
            this.path.pop();
            let x = 0;
            // while (x < this.path.length) {
            //     console.log("smth")
            //     console.log(this.path[x])
            //     x++;
            // }
            
            if (this.checkVisited(this.end[0], this.end[1])) {
                break;
            }
        }
    }

    columnCount() {
        let table = document.getElementById("table")
        let columnCounts = 0;
        let firstRow = table.rows[0]
        for (let cell of firstRow.cells) {
            columnCounts++;
        }
        return columnCounts

    }
    showPath() {
        let path = [];
        let current = this.end;
        while (true) {
            try {
                path.unshift(this.prime[[current[0], current[1]]][0]);
                current = this.prime[[current[0], current[1]]][0];
            } catch (error) {
                break;
            }
            
        }

        const displayPath = setInterval(() => {
            if (path.length == 0) {
                clearInterval(displayPath);
                return;
            }
            this.table.rows[path[0][1]-1].cells[path[0][0]-1].style.backgroundColor = "darkgreen";
            this.table.rows[this.start[1]-1].cells[this.start[0]-1].style.backgroundColor = "yellow";
            path.shift();
        }
            , 100);

    }

    checkVisited(x, y) {
        for (let i = 0; i < this.visited.length; i++) {
            if (this.visited[i][0] === x && this.visited[i][1] === y) {
                return true;
            }
        }
        return false;
    }

    generateGrid() {        
        this.createTable();
        this.markStart();
        this.markEnd();
        this.table = document.getElementById("table");
        this.table.addEventListener("click", (e) => this.handleCellClick(e));
    }

    handleCellClick(e) {
        let cell = e.target.closest('td');
        if (!cell) return; 

        let margin = 5;
        let rect = cell.getBoundingClientRect();
        let x = e.clientX - rect.left; 
        let y = e.clientY - rect.top;  

        let gridX = cell.cellIndex; 
        let gridY = cell.parentElement.rowIndex; 

        let isTopEdge = y <= margin;
        let isBottomEdge = y >= rect.height - margin;
        let isLeftEdge = x <= margin;
        let isRightEdge = x >= rect.width - margin;
        if (isTopEdge && (cell.style.borderTop === "5px solid blue")) {
            cell.style.borderTop = "";
        } else if (isBottomEdge && (cell.style.borderBottom == "5px solid blue")) {
            cell.style.borderBottom = "";
        } else if (isLeftEdge && (cell.style.borderLeft === "5px solid blue")) {
            cell.style.borderLeft = "";
        } else if (isRightEdge && (cell.style.borderRight === "5px solid blue")) {
            cell.style.borderRight = "";
        } else if (isTopEdge) {
            cell.style.borderTop = "5px solid blue";
        } else if (isBottomEdge) {
            cell.style.borderBottom = "5px solid blue";
        } else if (isLeftEdge) {
            cell.style.borderLeft = "5px solid blue";
        } else if (isRightEdge) {
            cell.style.borderRight = "5px solid blue";
        }
    }

    createTable() {
        try {
            document.getElementById("table").remove();
        } catch (error) {
            console.log("No existing table to remove.");
        }

        let table = document.createElement("table");
        table.id = "table";

        for (let i = 0; i < this.lengthInput.value; i++) {
            let row = document.createElement("tr");
            
            for (let j = 0; j < this.widthInput.value; j++) {
                let cell = document.createElement("td");
                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        document.body.appendChild(table);
    }

    markStart() {
        let table = document.getElementById("table");
        table.rows[this.startYInput.value-1].cells[this.startXInput.value-1].id = "start";
    }

    markEnd() {
        let table = document.getElementById("table");
        table.rows[this.endYInput.value-1].cells[this.endXInput.value-1].id = "end";
    }


}

let gridApp = new BFS();


