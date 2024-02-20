const express = require('express');
const port = 5000;

const app = express();

app.listen(port, () => console.log(`Listening on port ${port}...`));

//import { createClient } from '@supabase/supabase-js'
const supabase = require('@supabase/supabase-js') // import the library

// Create a single supabase client for interacting with your database
const db = supabase.createClient('https://niekubdxcrpvytperjrn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pZWt1YmR4Y3Jwdnl0cGVyanJuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNzM4NjgzNiwiZXhwIjoyMDIyOTYyODM2fQ.yx1NhWRIgQ5zccSbjrQfOEiSGUvFuiAbrtj03DRUBkU')



// récupérer les valeurs de la table:
app.get('/produits', async (req, res) => {
    const { data, error } = await db
        .from('categories')
        .select();
    res.send(data);
});

// ajouter une valeur dans la table:
app.get('/ajouteProduit', async (req, res) => {
    const { error } = await db
        .from('produits')
        .insert({ nom_produit: 'eau', prix: 5, quantite_en_stock: 1000 })
    res.send("ok")
});

//supprime une valeur de la table:
app.get('/sup', async (req, res) => {
    const { data, error } = await db
        .from('categories')
        .delete()
        .eq('id', 4)
    res.send(data);
});