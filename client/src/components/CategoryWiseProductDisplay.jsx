import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AxiosToastError from '../utils/AxiosToastError'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import CardLoading from './CardLoading'
import CardProduct from './CardProduct'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSelector } from 'react-redux'
import { valideURLConvert } from '../utils/valideURLConvert'

const CategoryWiseProductDisplay = ({ id, name }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const containerRef = useRef()
    const subCategoryData = useSelector(state => state.product.allSubCategory)
    const loadingCardNumber = new Array(6).fill(null)

    const fetchCategoryWiseProduct = async () => {
        console.log("[fetchCategoryWiseProduct] Called with category id:", id)
        try {
            setLoading(true)
            const response = await Axios({
                ...SummaryApi.getProductByCategory,
                data: {
                    id: id
                }
            })

            console.log("[fetchCategoryWiseProduct] Raw API response:", response)

            const { data: responseData } = response

            if (responseData.success) {
                console.log("[fetchCategoryWiseProduct] Products fetched:", responseData.data)
                setData(responseData.data)
            } else {
                console.warn("[fetchCategoryWiseProduct] API returned success=false")
            }
        } catch (error) {
            console.error("[fetchCategoryWiseProduct] Error fetching products", error)
            AxiosToastError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!id) {
            console.warn("[useEffect] No category id provided — skipping fetch")
            return
        }
        fetchCategoryWiseProduct()
    }, [id])

    const handleScrollRight = () => {
        containerRef.current.scrollLeft += 200
    }

    const handleScrollLeft = () => {
        containerRef.current.scrollLeft -= 200
    }

    const handleRedirectProductListpage = () => {
        console.log("[handleRedirectProductListpage] All subcategories from Redux:", subCategoryData)
        const subcategory = subCategoryData.find(sub => {
            const found = sub.category.some(c => c._id === id)
            return found
        })

        console.log("[handleRedirectProductListpage] Found subcategory:", subcategory)

        if (!subcategory) {
            console.warn("[handleRedirectProductListpage] No matching subcategory found for id:", id)
        }

        const url = `/${valideURLConvert(name)}-${id}/${valideURLConvert(subcategory?.name)}-${subcategory?._id}`
        console.log("[handleRedirectProductListpage] Generated redirect URL:", url)
        return url
    }

    const redirectURL = handleRedirectProductListpage()

    return (
        <div>
            <div className='container mx-auto p-4 flex items-center justify-between gap-4'>
                <h3 className='font-semibold text-lg md:text-xl'>{name}</h3>
                <Link to={redirectURL} className='text-green-600 hover:text-green-400'>See All</Link>
            </div>
            <div className='relative flex items-center '>
                <div
                    className='flex gap-4 md:gap-6 lg:gap-8 container mx-auto px-4 overflow-x-scroll scrollbar-none scroll-smooth'
                    ref={containerRef}
                >
                    {loading &&
                        loadingCardNumber.map((_, index) => {
                            return (
                                <CardLoading key={"CategorywiseProductDisplay123" + index} />
                            )
                        })
                    }

                    {!loading && data.length === 0 && (
                        <p className="text-gray-500">No products found for this category.</p>
                    )}

                    {data.map((p, index) => {
                        return (
                            <CardProduct
                                data={p}
                                key={p._id + "CategorywiseProductDisplay" + index}
                            />
                        )
                    })}
                </div>

                <div className='w-full left-0 right-0 container mx-auto px-2 absolute hidden lg:flex justify-between'>
                    <button onClick={handleScrollLeft} className='z-10 relative bg-white hover:bg-gray-100 shadow-lg text-lg p-2 rounded-full'>
                        <FaAngleLeft />
                    </button>
                    <button onClick={handleScrollRight} className='z-10 relative bg-white hover:bg-gray-100 shadow-lg p-2 text-lg rounded-full'>
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CategoryWiseProductDisplay
