import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { uplodExcelFile } from "../../services/apis/employeeApi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Bounce, toast } from "react-toastify";

const FileUploader = () => {
    const [fileName, setFileName] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null)
    const [isDragging, setIsDragging] = useState(false);

    const employe = useSelector((state: RootState) => state.Employe)


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.name.endsWith('.xlsx')) {
                setFile(selectedFile)
                setFileName(selectedFile.name);
            } else {
                toast.error('Only Excel (.xlsx) files are allowed', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                })
            }
        }
    };


    const handleClearFile = () => {
        setFileName(null);
        setFile(null)

    };

    /* Handle drag over event */
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    /* Handle drag leave event */
    const handleDragLeave = () => {
        setIsDragging(false);
    };

    /* Handle drop event */
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const selectedFile = e.dataTransfer.files[0];
        if (selectedFile && selectedFile.name.endsWith('.xlsx')) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        } else {
            toast.error('Only Excel (.xlsx) files are allowed', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        }
        setIsDragging(false);
    };

    const handleUpload = () => {
        if (file && employe?.id) {
            try {
                const status = uplodExcelFile(file, employe.id).then((data) => {

                    console.log('Uploaded data:', data);

                    if(data.response.status === 200){
                        toast.success(data.response.message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        })
                        handleClearFile()
                    }else{
                        toast.error(data.response.message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        })
                    }
                })
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    }
    return (
        <div className='w-full h-80 flex justify-center items-center flex-col gap-y-7'>
            <div className='w-[50%] h-auto rounded-md shadow-md border border-slate-400 p-5'>
                <label className='block text-slate-800 text-lg font-medium mb-1.5' htmlFor="input">Upload fileName</label>
                <div className={`flex items-start w-full ${isDragging ? 'bg-gray-200' : 'bg-gray-50'} `}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}>

                    {fileName ? (
                        <div className="text-start my-3">
                            <div className="relative inline-block">
                                <div className="w-full h-auto px-3 py-1 text-[0.8rem] bg-gray-200 text-gray-800 rounded-md">
                                    <span className="text-black text-base font-medium">File Name:{" "} </span>
                                    {fileName}
                                </div>
                                <button className="absolute -top-3 -right-2 bg-gray-200 text-red-500 cursor-pointer rounded-sm" onClick={handleClearFile}>
                                    <CloseIcon />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <label htmlFor="dragdrop-file" className="flex flex-col items-center justify-center w-full border-dashed rounded-lg h-[18vh] border-2 border-purple-400 cursor-pointer bg-gray-50">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <CloudUploadIcon fontSize="large" color="secondary" />
                                <p className="mb-2">
                                    <span className="font-medium">Click to upload</span> or Drag and drop
                                </p>
                                <p className="text-xs text-gray-500">Only supports .xlsx files</p>
                            </div>
                            <input id="dragdrop-file" type="file" accept=".xlsx" className="hidden" onChange={handleFileChange} />
                        </label>
                    )}
                </div>
            </div>
            <div className="">
                {fileName ? (
                    <button onClick={handleUpload} className="bg-purple-500 hover:bg-purple-600 text-white py-2  px-4 rounded-lg">
                        Submit File
                    </button>
                ) : ' '}
            </div>
        </div>
    );
};

export default FileUploader;
