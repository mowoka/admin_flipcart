import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, addCategory } from '../../store/actions'
import Modal from 'react-bootstrap/Modal';
import Input from '../../components/UI/Input'

const Category = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category)
    const [showModal, setShowModal] = React.useState(false);
    const [categoryName, setCategoryName] = React.useState('')
    const [categoryImage, setCategoryImage] = React.useState(null)
    const [categoryParentId, setCategoryParentId] = React.useState('')

    useEffect(() => {
        dispatch(getAllCategory());
    },[])

    console.log({category})


    const renderCategorie  = (categoryData) => {
        let myCategory = [];
        for(let cat of categoryData){
            myCategory.push(
                <React.Fragment>
                    <li key={cat.id}>{cat.name}</li>
                    {cat.children.length > 0 ? <ul>{renderCategorie(cat.children)}</ul> : null}
                </React.Fragment>
            )
        }
        return myCategory
    }

    const createCategoryList = (categoryData, options = []) => {
        for(let cat of categoryData){
            options.push({ value: cat._id, name: cat.name})
            if(cat.children.length > 0) {
                createCategoryList(cat.children, options)
            }
        }

        return options;
    }

    const handleCategoryImage = (e) =>{
        setCategoryImage(e.target.files[0]);
    } 

    const handleSubmit = () => {
        console.log({categoryName, categoryParentId, categoryImage})

        const form = new FormData();

        form.append('name',categoryName);
        form.append('parentId', categoryParentId);
        form.append('categoryImage', categoryImage)


        dispatch(addCategory(form))
        setShowModal(false)
    }

  return (
    <Layout sidebar>
        <Container>
            <Row>
                <Col md={12}>
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <h3>Category</h3>
                        <button onClick={() => setShowModal(true)}>Add</button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <ul>
                        {renderCategorie(category.categories)}

                    </ul>
                </Col>
            </Row>
        </Container>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
             <Modal.Title>Add New Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Input 
                    label= 'Name'
                    type= 'text'
                    placeholder= 'Category Name'
                    errorMessage=''
                    onChange={(e) => setCategoryName(e.target.value)}
                    value={categoryName}
                />
                <select className='form-control' onChange={(e) => setCategoryParentId(e.target.value)} value={categoryParentId}>
                    <option>Select Category</option>
                    {createCategoryList(category.categories).map(option => (
                        <option value={option.value} key={option._id}>{option.name}</option>
                    ))}
                </select>

                <input className='py-4' type="file"  name="categoryImage" onChange={handleCategoryImage}  />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
                Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  )
}

export default Category