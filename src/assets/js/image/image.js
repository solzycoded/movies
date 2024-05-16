class ItemImage {
    static async upload(image) {
        const formData = new FormData();
        formData.append('poster', image);

        try {
            await fetch(`http://localhost:3000/movies`, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(items => {
                console.log(items);
            })
            .catch(err => {
                console.error(err);
            });
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }
} 

export default ItemImage;