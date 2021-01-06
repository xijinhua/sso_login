<template>
	<div login-box>
		<div content-box>
			<div content>
				<h2>Barra 演示系统</h2>
				<div class="item-form-box">
					<div item-form>
						<i
							class="input-icon iconfont icon-user
"
						></i>
						<input
							v-model="ruleForm.username"
							placeholder="请输入用户名"
							class="input-class"
							type="text"
						/>
					</div>
					<div item-form>
						<i
							class="input-icon iconfont icon-password 
"
						></i>
						<input
							type="password"
							v-model="ruleForm.password"
							@keyup="
								ruleForm.password = ruleForm.password.replace(
									/[\u4e00-\u9fa5]/gi,
									''
								)
							"
							placeholder="请输入密码"
							class="input-class"
						/>
					</div>
					<button
						class="login-btn space"
						:disabled="loading"
						@click="onSubmit"
					>
						登录
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'login',
	data() {
		return {
			ruleForm: {
				username: 'test1111',
				password: 'test1111',
			},
			redirect: '',
			loading: false,
		}
	},
	methods: {
		onSubmit() {
			if (this.ruleForm.username == '') {
				this.$message({
					type: 'error',
					message: '用户名不能为空！',
				})
				return
			} else if (this.ruleForm.password == '') {
				this.$message({
					type: 'error',
					message: '密码不能为空！',
				})
			} else {
				this.redirect = this.$route.query && this.$route.redirect
				this.loading = true
				this.$keycloak
					.login(this.ruleForm)
					.then((res) => {
						this.loading = false
						if (res) {
							this.$router.push({
								path: this.redirect || '/',
							})
						} else {
							this.$message.error('登录失败')
						}
					})
					.catch((error) => {
						this.loading = false
						this.$message.error('登录失败')
					})
			}
		},
	},
}
</script>
<style scoped lang="scss">
[login-box] {
	box-shadow: 0px 0px 5px #333333;
	width: 100%;
	height: 100%;
	position: relative;
	background-image: url('../../assets/img/bg.png');
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;
	[content-box] {
		position: relative;
		-webkit-border-radius: 15px;
		-moz-border-radius: 15px;
		border-radius: 15px;
		background: rgba(255, 255, 255, 0.2);
		width: 500px;
		top: 20%;
		left: 50%;
		margin-left: -250px;
		padding: 20px 25px;
		[content] {
			background: #fff;
			h2 {
				line-height: 100px;
				color: #000;
				text-align: center;
				margin: 0;
			}
			.item-form-box {
				padding: 30px 60px;
				[item-form] {
					display: flex;
					margin-bottom: 30px;
					position: relative;
					.input-icon {
						line-height: 30px;
						color: #d3d3d3;
						font-size: 20px;
						position: absolute;
						top: 8px;
						left: 10px;
					}
					.input-class {
						flex: 1;
						border: none;
						font-size: 16px;
						border: 1px solid #d8d8d9;
						padding: 15px;
						padding-left: 40px;
					}
					.input-class:focus {
						color: #6e707e;
						background-color: #fff;
						outline: 0;
						border-color: #050cf1;
					}
				}
				.login-btn {
					margin: 20px 20%;
					color: #000;
					width: 60%;
					line-height: 40px;
					font-weight: 700;
					background: linear-gradient(
						87deg,
						#7688ed,
						#050cf1
					) !important;
					border: none;
					color: #fff;
					border-radius: 30px;
					font-size: 16px;
					cursor: pointer;
				}
			}
		}
	}
}
</style>
