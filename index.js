const express = require('express');
const port = 5000;

const app = express();

app.listen(port, () => console.log(`Listening on port ${port}...`));

const supabase = require('@supabase/supabase-js')

const db = supabase.createClient('https://niekubdxcrpvytperjrn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pZWt1YmR4Y3Jwdnl0cGVyanJuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNzM4NjgzNiwiZXhwIjoyMDIyOTYyODM2fQ.yx1NhWRIgQ5zccSbjrQfOEiSGUvFuiAbrtj03DRUBkU')


app.get('/produits', async (req, res) => {
    const { data, error } = await db
        .from('categories')
        .select();
    res.send("succes");
});


app.get('/ajouteProduit', async (req, res) => {
    const { error } = await db
        .from('Produit')
        .insert({ id_produit: 4, Nom: 'Jus', Prix: 3, Sold: 0, id_categories: 1 })
    res.send("succes")
});


app.get('/sup', async (req, res) => {
    const { data, error } = await db
        .from('Produit')
        .delete()
        .eq('id_produit', 4)
    res.send("succes");
});

app.get('/modifieProduit/:id', async (req, res) => {
    const produitId = req.params.id;
    const { data, error } = await db
            .from('Produit')
            .update({ Nom: 'àChanger', Prix: 0, Sold: 0, id_categories: null })
            .eq('id_produit', produitId);
    res.send("Mise à jour réussie");

});