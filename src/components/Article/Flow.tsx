import ReactFlow, { Background, 
    Node,
    Controls, 
    Edge,
    MarkerType} from 'reactflow';
import 'reactflow/dist/style.css';
import { queryClient } from '../../App';
import { QueryCache, QueryObserver } from '@tanstack/react-query';

const nodes: Node[] = [
    {
        id: '1',
        data: {
            label: 'QueryClient'
        },
        position: { x: 50, y: 50 }
    },
    {
        id: '2',
        data: {
            label: 'QueryCache'
        },
        position: { x: 150, y: 150 }
    }
]

const edges: Edge[] = [
    {
        id: '1-2', 
        source: '1',
        target: '2',
        markerEnd: {
            type: MarkerType.ArrowClosed
        }
    }
]


export const Flow = () => {

    const queryCacheData: QueryCache = queryClient.getQueryCache();
    const queryObserver = new QueryObserver(queryClient, { queryKey: ['repoData']});
    const queryData = queryClient.getQueryData(['repoData']);

    console.log(queryClient, queryCacheData., queryObserver, queryData);

    return (
        <div className="w-1/2 h-auto">
            <ReactFlow 
                nodes={nodes}
                edges={edges}
                defaultViewport={{
                    x: 50,
                    y: 50,
                    zoom: 3
                }}

                zoomOnScroll={false}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}

