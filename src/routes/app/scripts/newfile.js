export async function handleUpload(file, filelocation) {
    console.log(file, filelocation)


	const formData = new FormData();
	formData.append('file', file);
    formData.append('filelocation', filelocation);

    console.log(formData)

	const res = await fetch('/api/new-file', {
		method: 'POST',
		body: formData,
	});

	console.log(await res.json());
}
