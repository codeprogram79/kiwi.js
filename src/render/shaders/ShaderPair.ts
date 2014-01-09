/**
*  
* @module Kiwi
* @submodule Renderers
* 
*/



module Kiwi.Shaders {
    
    /**
    *
    * @class GLShaders
    * @constructor
    * @param gl {WebGLRenderingContext}
    * @return {GLShaders}
    */
    export class ShaderPair {

        constructor() {
      
            
        }

        public static RENDERER_ID: string = "ShaderPair";

        public init(gl: WebGLRenderingContext) {
                this.vertShader = this.compile(gl, this.vertSource.join("\n"), gl.VERTEX_SHADER);
                this.fragShader = this.compile(gl, this.fragSource.join("\n"), gl.FRAGMENT_SHADER);
                this.shaderProgram = this.attach(gl, this.vertShader, this.fragShader);
                this.loaded = true;
        }

        public loaded: boolean = false;
        
        /**
        *
        * @property vertShader
        * @type WebGLShader
        * @public
        */
        public vertShader: WebGLShader;
        
        /**
        *
        * @property fragShader
        * @type WebGLShader
        * @public
        */
        public fragShader: WebGLShader;
        
        /**
        *
        * @property shaderProgram
        * @type WebGLProgram
        * @public
        */
        public shaderProgram: WebGLProgram;
        
        /**
        *
        * @method attach
        * @param gl {WebGLRenderingContext}
        * @param vertShader {WebGLShader}
        * @param fragShader {WebGLShader}
        * @return {WebGLProgram}
        * @public
        */
        public attach(gl: WebGLRenderingContext, vertShader: WebGLShader, fragShader: WebGLShader): WebGLProgram {
            var shaderProgram: WebGLProgram = gl.createProgram();
            gl.attachShader(shaderProgram, fragShader);
            gl.attachShader(shaderProgram, vertShader);
            gl.linkProgram(shaderProgram);
            return shaderProgram;
        }
        
        /**
        *
        * @method compile
        * @param gl {WebGLRenderingContext}
        * @param src {string}
        * @param shaderType {number}
        * @return {WebGLShader}
        * @public
        */
        public compile(gl: WebGLRenderingContext, src: string, shaderType: number): WebGLShader {
            var shader: WebGLShader = gl.createShader(shaderType);
            gl.shaderSource(shader, src);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                return null;
            }
            return shader;
        }


        /**
        *
        * @property texture2DFrag
        * @type Array
        * @public
        */
        public fragSource: Array<any>;

        /**
        *
        * @property texture2DVert
        * @type Array
        * @public
        */
        public vertSource: Array<any>;

    }


}