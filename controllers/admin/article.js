const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

const models = require('../../models');

const createArticle = async (req, res) => {
    let name = req.body.name;
    let slug = req.body.slug;
    let image = req.body.image;
    let body = req.body.body;

    const newArticle = models.Article.create(
        {
            name: name,
            slug: slug,
            image: image,
            body: body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }
    ).then(article => {
        console.log(article);
        return res.status(200).json({message: 'Article created successfully'});
    }).catch(error => {
        return res.status(500).send(error.message);
    });
}

const updateArticle = async (req, res) => {
    console.log(req.body);
    let id = req.params.id;
    let name = req.body.name;
    let slug = req.body.slug;
    let image = req.body.image;
    let body = req.body.body;
    const updatedArticle = models.Article.update(
        {
            name: name,
            slug: slug,
            image: image,
            body: body
        },
        {
            where: {
                id: id
            }
        }
    ).then(article => {
        console.log(article);
        return res.status(200).json({message: 'Article updated successfully'});
    }).catch(error => {
        return res.status(500).send(error.message);
    });
}

const deleteArticle = async (req, res) => {
    const deletedArticle = models.Article.destroy({
        where: {
            id: req.params.id
        }
    }).then(article => {
        console.log(article);
        return res.status(200).json({message: 'Article deleted successfully'});
    }).catch(error => {
        return res.status(500).send(error.message);
    });
}


module.exports = {
    createArticle,
    updateArticle,
    deleteArticle
};