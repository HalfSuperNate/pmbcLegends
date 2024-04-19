import { useContractRead } from 'wagmi'; 
import { _abi, _abiAddress } from './abiGet'; 

export function GetPaused() {
    const { data, isError, isLoading } = useContractRead({
        address: _abiAddress,
        abi: _abi,
        functionName: 'paused',
        args: [],
    });

    return data;
}

export function GetPausedBatch(_batch) {
    const { data, isError, isLoading } = useContractRead({
        address: _abiAddress,
        abi: _abi,
        functionName: 'pausedBatch',
        args: [_batch],
    });

    return data;
}

export function GetSupply(_batch) {
    const { data, isError, isLoading } = useContractRead({
        address: _abiAddress,
        abi: _abi,
        //functionName: 'totalSupply',
        functionName: 'tokenNextToMintInBatch',
        args: [_batch],
    });

    return data;
}

export function GetCost(_batch, _onList, _tierID) {
    const { data, isError, isLoading } = useContractRead({
        address: _abiAddress,
        abi: _abi,
        functionName: '_cost',
        args: [_batch, _onList, _tierID]
        //account: _sender,
    });

    return data;
}

// export function GetMintPhase() {
//     const { data, isError, isLoading } = useContractRead({
//         address: _abiAddress,
//         abi: _abi,
//         functionName: 'mintPhase',
//         args: [],
//     });

//     return data;
// }

// export function IsHolder(_sender, _id) {
//     const { data, isError, isLoading } = useContractRead({
//         address: _abiAddress,
//         abi: _abi,
//         functionName: 'balanceOf',
//         args: [_sender, _id],
//     });

//     return data;
// }

// export function Exists(_id) {
//     const { data, isError, isLoading } = useContractRead({
//         address: _abiAddress,
//         abi: _abi,
//         functionName: 'exists',
//         args: [_id],
//     });

//     return data;
// }

export function AdminCheck(_sender) {
    const { data, isError, isLoading } = useContractRead({
        address: _abiAddress,
        abi: _abi,
        functionName: 'checkIfAdmin',
        args: [],
        account: _sender,
    });

    return data;
}

// export async function GetMetadata(_id) {
//     const { data: uri, isError, isLoading } = useContractRead({
//         address: _abiAddress,
//         abi: _abi,
//         functionName: 'uri',
//         args: [_id],
//     });

//     if (isError || isLoading) {
//         return null;
//     }

//     try {
//         const response = await fetch(uri);
//         const json = await response.json();

//         if (json.image) {
//             return json.image; // Return the image URI from the JSON
//         } else {
//             return null; // JSON does not contain image key
//         }
//     } catch (error) {
//         console.error('Error fetching JSON metadata:', error);
//         return null;
//     }
// }