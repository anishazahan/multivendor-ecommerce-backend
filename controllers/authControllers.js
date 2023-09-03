class authControllers {
  admin_login = async (req, res) => {
    console.log(req.body);
    // const { email, password } = req.body
    // try {
    //     const admin = await adminModel.findOne({ email }).select('+password')
    //     if (admin) {
    //         const match = await bcrpty.compare(password, admin.password)
    //         if (match) {
    //             const token = await createToken({
    //                 id: admin.id,
    //                 role: admin.role
    //             })
    //             res.cookie('accessToken', token, {
    //                 expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    //             })
    //             responseReturn(res, 200, { token, message: 'Login success' })
    //         } else {
    //             responseReturn(res, 404, { error: "Password wrong" })
    //         }
    //     } else {
    //         responseReturn(res, 404, { error: "Email not found" })
    //     }
    // } catch (error) {
    //     responseReturn(res, 500, { error: error.message })
    // }
  };
}

module.exports = new authControllers();
