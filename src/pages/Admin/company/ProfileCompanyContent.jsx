import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  Handle,
  useNodesState,
  useEdgesState,
} from "react-flow-renderer";
import { Button } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomInputNode = ({ data }) => {
  return (
    <div
      style={{
        padding: 10,
        border: "1px solid #ddd",
        borderRadius: 5,
        backgroundColor: "#e8f5e9",
        textAlign: "center",
        width: 150,
      }}
    >
      <Handle type="target" position="left" style={{ background: "#555" }} />
      <div>{data.label}</div>
      <input
        type="text"
        placeholder="Enter value"
        style={{
          marginTop: 10,
          padding: "5px",
          borderRadius: 4,
          border: "1px solid #ddd",
          width: "100%",
        }}
      />
      <Handle type="source" position="right" style={{ background: "#555" }} />
    </div>
  );
};

const CustomOutputNode = ({ data }) => {
  return (
    <div
      style={{
        padding: 10,
        border: "1px solid #ddd",
        borderRadius: 5,
        backgroundColor: "#fbe9e7",
        textAlign: "center",
        width: 150,
      }}
    >
      <Handle type="target" position="left" style={{ background: "#555" }} />
      <div>{data.label}</div>
      <input
        type="text"
        placeholder="Output here"
        disabled
        style={{
          marginTop: 10,
          padding: "5px",
          borderRadius: 4,
          border: "1px solid #ddd",
          width: "100%",
          backgroundColor: "#f7f7f7",
          color: "#555",
        }}
      />
      <Handle type="source" position="right" style={{ background: "#555" }} />
    </div>
  );
};

const CustomButtonNode = ({ data }) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#e3f2fd",
        textAlign: "center",
        width: "250px",
        position: "relative",
      }}
    >
      <Handle type="target" position="left" style={{ background: "#555" }} />
      <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>
        Button Block
      </div>
      <div style={{ fontSize: "14px", marginBottom: "20px" }}>
        {data.question || "Are you want to continue chat?"}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Button
          color="primary"
          className="btn btn-info btn-sm ms-2"
          onClick={() => alert("Yes clicked")}
        >
          Yes
        </Button>
        <Button
          color="secondary"
          className="btn btn-info btn-sm ms-2"
          onClick={() => alert("No clicked")}
        >
          No
        </Button>
        <Button
          color="info"
          className="btn btn-info btn-sm ms-2"
          onClick={() => alert("Default clicked")}
        >
          Default
        </Button>
      </div>
      <Button
        color="success"
        style={{ width: "100%" }}
        onClick={() => alert("Add Button clicked")}
      >
        Add Button
      </Button>
      <Handle type="source" position="right" style={{ background: "#555" }} />
    </div>
  );
};

const nodeTypes = {
  inputNode: CustomInputNode,
  outputNode: CustomOutputNode,
  buttonNode: CustomButtonNode,
};

const ProfileCompanyContent = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [showControls, setShowControls] = useState(false);

  const addNode = (type) => {
    const id = `${type}-${nodes.length + 1}`;
    const positionX = 150 + nodes.length * 100;
    const positionY = type === "inputNode" ? 100 : type === "outputNode" ? 200 : 300;

    const newNode = {
      id,
      type,
      position: { x: positionX, y: positionY },
      data: {
        label:
          type === "inputNode"
            ? `Input ${nodes.length + 1}`
            : type === "outputNode"
            ? `Output ${nodes.length + 1}`
            : `Button ${nodes.length + 1}`,
      },
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const deleteNode = (nodeId) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== nodeId));
    toast.success(`Node "${nodeId}" deleted successfully!`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
    <div
      style={{
        display: "flex",
        background: "#f8f9fa",
        padding: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        justifyContent: "space-between",
      }}
    >
      <div className="flex justify-center">
        {/* Input Node */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 10 }}>
          <Button
            color="success"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 35,
              height: 35,
            }}
            onClick={() => addNode("inputNode")}
          >
            <i className="bi bi-box-arrow-in-right" style={{ fontSize: "20px" }}></i>
          </Button>
          <span style={{ fontSize: "12px", marginTop: "5px" }}>Input</span>
        </div>
        
  
        {/* Output Node */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 10 }}>
          <Button
            color="danger"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 35,
              height: 35,
            }}
            onClick={() => addNode("outputNode")}
          >
            <i className="bi bi-box-arrow-right" style={{ fontSize: "20px" }}></i>
          </Button>
          <span style={{ fontSize: "12px", marginTop: "5px" }}>Output</span>
        </div>
  
        {/* Button Node */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 10 }}>
          <Button
            color="primary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 35,
              height: 35,
            }}
            onClick={() => addNode("buttonNode")}
          >
            <i className="bi bi-circle" style={{ fontSize: "20px" }}></i>
          </Button>
          <span style={{ fontSize: "12px", marginTop: "5px" }}>Button</span>
        </div>
       
      </div>
      <div className="flex justify-end">
      <div className="mt-4 ms-2">
      <Link to="#" className="btn btn-primary btn-sm text-lg font-medium text-white">
      Save
        </Link> 
      </div>
      <div className="mt-4 ms-2">
      <Link to="#" className="btn btn-primary btn-sm text-lg font-medium text-white">
      Test
        </Link> 
      </div>
      <div className="mt-4 ms-2">
      <Link to="/Admin/channel" className="btn btn-primary btn-sm text-lg font-medium text-white">
      Deploy
        </Link> 
      </div>
      </div>
    
    </div>
  
    <div style={{ flex: 1 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
    
    <ToastContainer position="top-right" autoClose={3000} />
   
  
  </div>
  

  );
  
};

export  {ProfileCompanyContent};
